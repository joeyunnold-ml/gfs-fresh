import React, { useState } from 'react';
import { members, primaryProfile } from '../mockData';
import { Member } from '../types';
import { Pencil, Plus } from 'lucide-react';

const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
      {label}
    </span>
    <span className="text-base text-[#343433]">{value}</span>
  </div>
);

const ProfileInput: React.FC<{ label: string; value: string; onChange: (v: string) => void; className?: string }> = ({ label, value, onChange, className }) => (
  <div className={`flex flex-col gap-1 ${className || ''}`}>
    <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
    />
  </div>
);

const formatPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const PhoneInput: React.FC<{ label: string; value: string; onChange: (v: string) => void }> = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
      {label}
    </label>
    <input
      type="tel"
      value={value}
      onChange={(e) => onChange(formatPhone(e.target.value))}
      placeholder="(555) 123-4567"
      className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors"
    />
  </div>
);

const AdditionalMemberCard: React.FC<{ member: Member; isEditing: boolean; onEdit: () => void; onSave: () => void; onCancel: () => void }> = ({ member, isEditing, onEdit, onSave, onCancel }) => {
  const nameParts = member.name.split(' ');
  const [firstName, setFirstName] = useState(nameParts[0] || '');
  const [lastName, setLastName] = useState(nameParts.slice(1).join(' ') || '');
  const [email, setEmail] = useState(`${nameParts[0]?.toLowerCase()}.${nameParts.slice(1).join('').toLowerCase()}@email.com`);

  const handleCancel = () => {
    setFirstName(nameParts[0] || '');
    setLastName(nameParts.slice(1).join(' ') || '');
    setEmail(`${nameParts[0]?.toLowerCase()}.${nameParts.slice(1).join('').toLowerCase()}@email.com`);
    onCancel();
  };

  return (
    <div>
      <div
        onClick={() => !isEditing && onEdit()}
        className={`relative bg-white p-6 flex items-center justify-between group transition-colors duration-200 ${isEditing ? 'bg-[#f7f7f6]' : 'cursor-pointer hover:bg-[#f7f7f6]'}`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 border border-[#e0e0e0] pointer-events-none transition-shadow duration-200 ${isEditing ? 'shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]' : 'shadow-none group-hover:shadow-[4px_4px_0px_0px_rgba(139,129,120,0.24)]'}`}
        />
        <h3 className="text-[18px] font-bold text-[#343433] relative">{member.name}</h3>
        <div className={`relative w-8 h-8 flex items-center justify-center transition-colors duration-200 ${isEditing ? 'bg-[#EEEDEC]' : 'bg-transparent group-hover:bg-[#EEEDEC]'}`}>
          <Pencil className="w-4 h-4 text-[#6B6B6B]" />
        </div>
      </div>

      {isEditing && (
        <div className="border border-t-0 border-[#e0e0e0] bg-white p-6">
          <div className="grid grid-cols-1 gap-4">
            <ProfileInput label="First Name" value={firstName} onChange={setFirstName} />
            <ProfileInput label="Last Name" value={lastName} onChange={setLastName} />
            <ProfileInput label="Email" value={email} onChange={setEmail} />
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={onSave}
              className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors"
              style={{ border: '1.5px solid #343433' }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Profile: React.FC = () => {
  const primaryMember = members[0];
  const additionalMembers = members.slice(1);

  const [isEditing, setIsEditing] = useState(false);
  const [editingMemberId, setEditingMemberId] = useState<string | null>(null);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [editFirstName, setEditFirstName] = useState(primaryProfile.firstName);
  const [editLastName, setEditLastName] = useState(primaryProfile.lastName);
  const [editEmail, setEditEmail] = useState(primaryProfile.email);
  const [editPhone, setEditPhone] = useState(primaryProfile.phone);
  const [editStreet, setEditStreet] = useState(primaryProfile.street);
  const [editCity, setEditCity] = useState(primaryProfile.city);
  const [editState, setEditState] = useState(primaryProfile.state);
  const [editZip, setEditZip] = useState(primaryProfile.zip);

  const handleCancel = () => {
    setEditFirstName(primaryProfile.firstName);
    setEditLastName(primaryProfile.lastName);
    setEditEmail(primaryProfile.email);
    setEditPhone(primaryProfile.phone);
    setEditStreet(primaryProfile.street);
    setEditCity(primaryProfile.city);
    setEditState(primaryProfile.state);
    setEditZip(primaryProfile.zip);
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const fullAddress = `${primaryProfile.street}, ${primaryProfile.city}, ${primaryProfile.state} ${primaryProfile.zip}`;

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-[#EEEDEC] px-4 pb-0 pt-2">
        <h1 className="text-2xl font-black uppercase tracking-wide mb-4 font-arquitecta">WELCOME, TOM!</h1>
        <div className="border-b-2 border-[#B6D840] inline-block pb-1">
          <span className="font-bold text-gray-900 uppercase tracking-wider font-arquitecta">PROFILE</span>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Primary Member Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[18px] font-bold text-[#343433]">{primaryMember.name}</h3>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors"
                style={{ border: '1.5px solid #343433' }}
              >
                Edit
              </button>
            )}
          </div>

          {isEditing ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileInput label="First Name" value={editFirstName} onChange={setEditFirstName} />
                <ProfileInput label="Last Name" value={editLastName} onChange={setEditLastName} />
                <ProfileInput label="Email" value={editEmail} onChange={setEditEmail} />
                <PhoneInput label="Phone" value={editPhone} onChange={setEditPhone} />
                <div className="md:col-span-2">
                  <ProfileInput label="Street" value={editStreet} onChange={setEditStreet} />
                </div>
                <ProfileInput label="City" value={editCity} onChange={setEditCity} />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-bold uppercase tracking-wider text-[#6B6B6B] font-arquitecta">
                      State
                    </label>
                    <select
                      value={editState}
                      onChange={(e) => setEditState(e.target.value)}
                      className="text-base text-[#343433] border border-[#e0e0e0] px-3 py-2 bg-white focus:outline-none focus:border-[#B6D840] transition-colors appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B6B6B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
                    >
                      <option value="NY">NY</option>
                      <option value="CA">CA</option>
                      <option value="TX">TX</option>
                      <option value="FL">FL</option>
                      <option value="IL">IL</option>
                      <option value="PA">PA</option>
                      <option value="OH">OH</option>
                      <option value="NJ">NJ</option>
                      <option value="CT">CT</option>
                      <option value="MA">MA</option>
                    </select>
                  </div>
                  <ProfileInput label="Zip" value={editZip} onChange={setEditZip} />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSave}
                  className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors"
                  style={{ border: '1.5px solid #343433' }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-6">
              <ProfileField label="Email" value={primaryProfile.email} />
              <ProfileField label="Phone" value={primaryProfile.phone} />
              <ProfileField label="Address" value={fullAddress} />
            </div>
          )}
        </div>

        {/* Additional Members Section */}
        {additionalMembers.length > 0 && (
          <div>
            <h2 className="text-lg font-black uppercase tracking-wide font-arquitecta mb-6">
              Additional Members
            </h2>
            <div className="flex flex-col gap-4">
              {additionalMembers.map((member) => (
                <AdditionalMemberCard
                  key={member.id}
                  member={member}
                  isEditing={editingMemberId === member.id}
                  onEdit={() => setEditingMemberId(member.id)}
                  onSave={() => setEditingMemberId(null)}
                  onCancel={() => setEditingMemberId(null)}
                />
              ))}
              {isAddingMember ? (
                <div className="border border-[#e0e0e0] bg-white p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <ProfileInput label="First Name" value={newFirstName} onChange={setNewFirstName} />
                    <ProfileInput label="Last Name" value={newLastName} onChange={setNewLastName} />
                    <ProfileInput label="Email" value={newEmail} onChange={setNewEmail} />
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => {
                        setIsAddingMember(false);
                        setNewFirstName('');
                        setNewLastName('');
                        setNewEmail('');
                      }}
                      className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta bg-[#343433] text-white hover:bg-[#1a1a1a] transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setIsAddingMember(false);
                        setNewFirstName('');
                        setNewLastName('');
                        setNewEmail('');
                      }}
                      className="px-6 py-3 text-base font-bold uppercase tracking-wider font-arquitecta hover:bg-[#f7f7f6] transition-colors"
                      style={{ border: '1.5px solid #343433' }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsAddingMember(true)}
                  className="relative p-6 flex items-center justify-center gap-2 border border-dashed border-[#e0e0e0] text-[#6B6B6B] hover:border-[#B6D840] hover:text-[#343433] transition-colors duration-200 cursor-pointer"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-bold uppercase tracking-wider font-arquitecta">Add Member</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
