import React from 'react'
import { useState } from "react";


const HeroRight = () => {

    const LinkIcon = () => (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
          <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
        </svg>
      );
       
      const QrIcon = () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8-2h3v3h-3v-3Zm5 0h3v3h-3v-3Zm-5 5h3v3h-3v-3Zm5 0h3v3h-3v-3Z" />
        </svg>
      );
       
      const SendIcon = () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.7 2.3a1 1 0 0 0-1-.2L3 9.2a1 1 0 0 0 .1 1.9l6.9 2.4 2.4 6.9a1 1 0 0 0 1.9.1l7.1-17.7a1 1 0 0 0-.2-1Z" />
        </svg>
      );
       
      const GlobeIcon = () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M2.5 12h19M12 2.5c2.8 2.6 4.2 5.8 4.2 9.5S14.800 18.900 12 21.500C9.200 18.900 7.800 15.700 7.800 12S9.200 5.100 12 2.500Z" />
        </svg>
      );
       
      const MarkerIcon = () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="m15.2 3.3 5.5 5.5a1 1 0 0 1 0 1.4l-7.4 7.4-6.9-6.9 7.4-7.4a1 1 0 0 1 1.4 0ZM5.200 12.200l6.600 6.600-1.300 1.300H4.300l-1.100-1.100 2-2-.9-.9 1-1.100.9-.8Z" />
        </svg>
      );
       
      const ChevronIcon = () => (
        <svg className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
       
      const inputBase =
        "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-lg text-gray-900 placeholder-gray-500 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30";
       
      const ShortenForm = () => {
        const [tab, setTab] = useState("link");
        const [longUrl, setLongUrl] = useState("");
        const [domain, setDomain] = useState("tinyurl.com");
        const [alias, setAlias] = useState("");
       
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log({ longUrl, domain, alias });
        };

  return (
    <div className='bg-amber-600 h-full  w-1/2'>
      
      <div className="w-full max-w-187.5">
        {/* Tabs */}
        <div className="flex">
          <button
            type="button"
            onClick={() => setTab("link")}
            className={`flex flex-1 items-center justify-center gap-3 rounded-tl-xl py-6 text-xl font-bold transition-colors ${
              tab === "link" ? "bg-[#f7f8fa] text-gray-900" : "bg-[#0d7894] text-white"
            }`}
          >
            <LinkIcon />
            Shorten a Link
          </button>
          <button
            type="button"
            onClick={() => setTab("qr")}
            className={`flex flex-1 items-center justify-center gap-3 rounded-tr-xl py-6 text-xl font-bold transition-colors ${
              tab === "qr" ? "bg-[#f7f8fa] text-gray-900" : "bg-[#0d7894] text-white"
            }`}
          >
            <QrIcon />
            Generate QR Code
          </button>
        </div>
 
        {/* Card body */}
        <form onSubmit={handleSubmit} className="rounded-b-xl bg-[#f7f8fa] px-7 pb-8 pt-7">
          {/* Long URL */}
          <label htmlFor="longUrl" className="mb-3 flex items-center gap-3 text-xl font-bold text-gray-900">
            <SendIcon />
            Long URL <span className="text-red-800">*</span>
          </label>
          <input
            id="longUrl"
            type="url"
            required
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL here"
            className={inputBase}
          />
 
          {/* Domain + Alias */}
          <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-start gap-x-3">
            <div>
              <label htmlFor="domain" className="mb-3 flex items-center gap-3 text-xl font-bold text-gray-900">
                <GlobeIcon />
                Domain
              </label>
              <div className="relative">
                <select
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className={`${inputBase} appearance-none pr-12`}
                >
                  <option value="tinyurl.com">tinyurl.com</option>
                </select>
                <ChevronIcon />
              </div>
            </div>
 
            <span className="pt-[3.35rem] text-2xl text-gray-900">/</span>
 
            <div>
              <label htmlFor="alias" className="mb-3 flex items-center gap-3 text-xl font-bold text-gray-900">
                <MarkerIcon />
                Alias (optional)
              </label>
              <input
                id="alias"
                type="text"
                minLength={5}
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                placeholder="Add alias here"
                className={inputBase}
              />
              <p className="mt-2 text-sm text-gray-600">Must be at least 5 characters</p>
            </div>
          </div>
 
          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-[#218347] py-3.5 text-xl font-medium text-white transition-colors hover:bg-[#1b6c3b] focus:outline-none focus:ring-2 focus:ring-[#218347]/50"
          >
            Shorten Link
          </button>
 
          <p className="mt-6 text-base italic text-gray-900">
            By clicking Shorten Link, you agree with our{" "}
            <a href="#" className="text-[#0d7894] hover:underline">Terms of Service</a>,{" "}
            <a href="#" className="text-[#0d7894] hover:underline">Privacy Policy</a>, and{" "}
            <a href="#" className="text-[#0d7894] hover:underline">Use of Cookies</a>.
          </p>
        </form>
      </div>

    </div>
  )
}}

export default HeroRight
