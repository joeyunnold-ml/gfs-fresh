import { useState, useRef, useEffect } from 'react'
import { emails } from './emails'
import './App.css'

function EmailIframe({ html }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(html)
    doc.close()

    const resize = () => {
      try {
        iframe.style.height = doc.documentElement.scrollHeight + 'px'
      } catch (e) { /* cross-origin safety */ }
    }

    iframe.onload = resize
    setTimeout(resize, 100)
    setTimeout(resize, 500)
  }, [html])

  return (
    <iframe
      ref={iframeRef}
      title="Email preview"
      style={{ width: '100%', border: 'none', minHeight: '600px' }}
    />
  )
}

function InboxIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"/></svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
  )
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
  )
}

function DraftIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/></svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  )
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
  )
}

function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
  )
}

function ArrowBackIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
  )
}

function ComposeIcon() {
  return (
    <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
  )
}

function GmailLogo() {
  return (
    <svg viewBox="0 0 75 24" width="75" height="24">
      <path d="M10.5 12.5L0 5V19a2 2 0 002 2h7v-8.5z" fill="#4285f4"/>
      <path d="M24 5l-10.5 7.5V21h7a2 2 0 002-2V5z" fill="#34a853"/>
      <path d="M24 3l-12 9L0 3V2a2 2 0 012-2h20a2 2 0 012 2v1z" fill="#ea4335"/>
      <path d="M0 3l12 9L24 3" fill="#fbbc04" fillOpacity="0"/>
      <text x="28" y="18" fill="#5f6368" fontSize="16" fontWeight="400" fontFamily="'Google Sans', Roboto, sans-serif">Gmail</text>
    </svg>
  )
}

export default function App() {
  const [selectedId, setSelectedId] = useState(emails[0].id)
  const selected = emails.find(e => e.id === selectedId)

  return (
    <div className="gmail-app">
      {/* Top Bar */}
      <div className="gmail-topbar">
        <div className="gmail-topbar-left">
          <div className="gmail-hamburger">
            <span /><span /><span />
          </div>
        </div>
        <div className="gmail-searchbar">
          <SearchIcon />
          <span>Search mail</span>
        </div>
        <div className="gmail-topbar-right">
          <div className="gmail-topbar-icon"><HelpIcon /></div>
          <div className="gmail-topbar-icon"><SettingsIcon /></div>
          <div className="gmail-avatar">J</div>
        </div>
      </div>

      {/* Body */}
      <div className="gmail-body">
        {/* Sidebar */}
        <div className="gmail-sidebar">
          <button className="gmail-compose-btn">
            <ComposeIcon />
            Compose
          </button>

          <button className="gmail-nav-item active">
            <InboxIcon />
            Inbox
            <span className="gmail-nav-count">3</span>
          </button>
          <button className="gmail-nav-item">
            <StarIcon />
            Starred
          </button>
          <button className="gmail-nav-item">
            <SendIcon />
            Sent
          </button>
          <button className="gmail-nav-item">
            <DraftIcon />
            Drafts
          </button>

          {/* Email template list */}
          <div className="email-list-section">
            {emails.map(email => (
              <button
                key={email.id}
                className={`email-list-item ${selectedId === email.id ? 'active' : ''}`}
                onClick={() => setSelectedId(email.id)}
              >
                <span className="email-list-item-subject">{email.subject}</span>
                <span className="email-list-item-from">{email.from}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Panel */}
        <div className="gmail-main">
          {/* Toolbar */}
          <div className="email-view-toolbar">
            <button className="email-view-toolbar-btn">
              <ArrowBackIcon />
            </button>
          </div>

          {/* Subject */}
          <div className="email-view-subject">
            <h2>
              {selected.subject}
              <span className="label">{selected.label}</span>
            </h2>
          </div>

          {/* Sender */}
          <div className="email-sender-row">
            <div className="email-sender-avatar">G</div>
            <div className="email-sender-info">
              <div className="email-sender-name">
                {selected.from}
                <span>&lt;{selected.fromEmail}&gt;</span>
              </div>
              <div className="email-sender-to">to {selected.to}</div>
            </div>
            <div className="email-sender-date">{selected.date}</div>
          </div>

          {/* Email Body */}
          <div className="email-body-container">
            <EmailIframe html={selected.html} />
          </div>
        </div>
      </div>
    </div>
  )
}
