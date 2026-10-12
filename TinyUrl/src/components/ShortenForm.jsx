import { useState } from "react";
import Tabs from "./Tabs";
import FormField, { inputClass } from "./FormField";
import { LinkIcon, QrIcon, SendIcon, GlobeIcon, MarkerIcon, ChevronIcon } from "./Icons";

const TABS = [
  { id: "link", label: "Shorten a Link", icon: <LinkIcon /> },
  { id: "qr", label: "Generate QR Code", icon: <QrIcon /> },
];

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
    <div className="w-full max-w-187.5">
      <Tabs tabs={TABS} active={tab} onChange={setTab} />

      <form onSubmit={handleSubmit} className="rounded-b-xl bg-[#f7f8fa] px-7 pb-8 pt-7">
        <FormField id="longUrl" label="Long URL" icon={<SendIcon />} required>
          <input
            id="longUrl"
            type="url"
            required
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Paste long URL here"
            className={inputClass}
          />
        </FormField>

        <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-start gap-x-3">
          <FormField id="domain" label="Domain" icon={<GlobeIcon />}>
            <div className="relative">
              <select
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className={`${inputClass} appearance-none pr-12`}
              >
                <option value="tinyurl.com">tinyurl.com</option>
              </select>
              <ChevronIcon />
            </div>
          </FormField>

          <span className="pt-[3.35rem] text-2xl text-gray-900">/</span>

          <FormField id="alias" label="Alias (optional)" icon={<MarkerIcon />} hint="Must be at least 5 characters">
            <input
              id="alias"
              type="text"
              minLength={5}
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              placeholder="Add alias here"
              className={inputClass}
            />
          </FormField>
        </div>

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
  );
};

export default ShortenForm;
