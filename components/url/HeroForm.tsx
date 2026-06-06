'use client'
import { useState ,useEffect} from 'react'
import { X, CheckCircle2, Link2, Clock, QrCode, Sparkles,Calendar as CalendarIcon, ChevronDownIcon } from 'lucide-react'

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

import { format } from "date-fns"
 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { generateShortUrl } from '@/services/generateURL'

const features = [
  { id: 'custom',   icon: Link2,       label: 'Custom Link',         color: '#8b5cf6', bg: 'rgba(139,92,246,0.15)' },
  // { id: 'password', icon: ShieldCheck, label: 'Password Protection',  color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  { id: 'expiry',   icon: Clock,       label: 'Set Expiration',       color: '#c084fc', bg: 'rgba(192,132,252,0.1)' },
  { id: 'qr',       icon: QrCode,      label: 'Generate QR Code',     color: '#fbbf24', bg: 'rgba(251,191,36,0.15)' },
]

function isValidUrl(str: string) {
  try { new URL(str); return true } catch { return false }
}

export default function HeroForm() {
  const [date, setDate] = useState<Date>()
  const [url, setUrl] = useState('')
  const [customSlug, setCustomSlug] = useState("")
  const [activeFeature, setActiveFeature] = useState<string | null>('custom')
  const [shortened, setShortened] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);

  const valid = isValidUrl(url)

  // const handleShorten = async () => {
  //   if (!valid) return
  //   setLoading(true)
  //   await new Promise(r => setTimeout(r, 900))
  //   const slug = customSlug || Math.random().toString(36).slice(2, 8)
  //   setShortened(`lnk.sh/${slug}`)
  //   setLoading(false)
  // }

const handleShorten = async () => {
  setShortened(null);
  setError(null);
  setCustomSlug("");
    if (!valid) return
    setLoading(true)
    // await new Promise(r => setTimeout(r, 900))
    // const slug = customSlug || Math.random().toString(36).slice(2, 8)
    // const slug = customSlug 
      try {
    const payload = {
    "originalUrl":url,
    "customAlias": customSlug.trim() || null,
    "isPrivate": false,
    "expiresAt": "2026-06-30T23:59:59Z",
    "generateQrCode": false
    };
      const res = await generateShortUrl(payload);
          /**
     * Success handling
     */
    if (res?.status === 200) {
      console.log(res);
      console.log(res?.data?.data?.shortKey);
      // setCustomSlug(res?.data?.data?.shortKey);
const shortKey = res?.data?.data?.shortKey;
setCustomSlug(shortKey);
setShortened(`https://shortly.sandeepningwal.com/${shortKey}`);
      // toast.success(
      //   res?.data?.message || "Budget created successfully"
      // );
      /**
       * Optional: reset form
       */
      // setAmount("");
      // setMonth("");
      // setYear("");
      // setCategoryId("");

      /**
       * Redirect after success
       */
      // router.push("/budgets");
      // return;
    }
      }
      catch(err: any){
         setError(
      err?.response?.data?.message ||
      "Something went wrong. Please try again."
    );
      }
    setLoading(false)
    setCustomSlug("");
  }

//   const handleCreateBudget = async (
//   e: React.FormEvent<HTMLFormElement>
// ) => {
//   e.preventDefault();

//   /**
//    * Prevent duplicate submissions
//    */
//   if (loading) return;

//   /**
//    * Basic validation
//    */
//   if (!amount || !month || !year || !categoryId) {
//     toast.error("Please fill all required fields");
//     return;
//   }

//   if (Number(amount) <= 0) {
//     toast.error("Amount must be greater than 0");
//     return;
//   }

//   setLoading(true);

//   try {
//     const payload = {
//       amount: Number(amount),
//       month,
//       year: Number(year),
//       categoryId,
//     };

//     const res = await createBudget(payload);

//     /**
//      * Success handling
//      */
//     if (res?.status === 200) {
//       toast.success(
//         res?.data?.message || "Budget created successfully"
//       );
//       /**
//        * Optional: reset form
//        */
//       // setAmount("");
//       // setMonth("");
//       // setYear("");
//       // setCategoryId("");

//       /**
//        * Redirect after success
//        */
//       // router.push("/budgets");
//       return;
//     }

//     /**
//      * API returned non-success response
//      */
//     // console.log(res?.data)
//     // toast.error(
//     //   res?.data?.message || "Failed to create budget"
//     // );
//   } catch (err: any) {
//     /**
//      * Production-grade error handling
//      */
//     console.error("Create Budget Error:", {
//       message: err?.message,
//       statusCode: err?.statusCode,
//       errors: err?.errors,
//       fullError: err,
//     });

//     toast.error(
//       err?.response?.data?.message ||
//         "Something went wrong while creating budget"
//     );
//   } finally {
//     /**
//      * Always stop loader
//      */
//     setLoading(false);
//   }
// };
useEffect(() => {
    console.log("updated slug:", customSlug);
}, [customSlug]);
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Card */}
      <div className="rounded-2xl border border-white/10 p-6"
        style={{ background: 'rgba(22, 27, 34, 0.85)', backdropFilter: 'blur(20px)' }}>

        {/* URL input row */}
        <div className="flex gap-3 mb-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={url ?? ""} 
       onChange={e => { setUrl(e.target.value); setShortened(null) }}
              placeholder="Paste your long URL here..."
              className="input-glow w-full bg-black/30 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-cyan-400/60"
            />
            {url && (
              <button onClick={() => { setUrl(''); setShortened(null) }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors">
                <X size={15} />
              </button>
            )}
          </div>

          <button
            onClick={handleShorten}
            disabled={!valid || loading}
            className="btn-shimmer flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Shortening...
              </>
            ) : (
              <>
                <Sparkles size={15} />
                Shorten Now
              </>
            )}
          </button>
        </div>

        {/* Validation */}
        {url && (
          <div className={`flex items-center gap-1.5 text-xs mb-4 ${valid ? 'text-emerald-400' : 'text-rose-400'}`}>
            <CheckCircle2 size={13} className={valid ? 'valid-pulse' : ''} />
            {valid ? 'Valid URL' : 'Please enter a valid URL'}
          </div>
        )}

        {/* Custom link input */}
          <div className="mb-4 animate-slide-up-2 space-y-4">
            <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
              <Link2 size={12} />
              Custom Link
            </div>
            <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/20">
              <span className="px-4 py-3 text-sm text-white/30 border-r border-white/10 bg-white/5 whitespace-nowrap">
                {/* lnk.sh/ */}
                https://shortly.sandeepningwal.com/
              </span>
              <input
                type="text"
                value={customSlug ?? ""}
                onChange={e => setCustomSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                placeholder="my-custom-link"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none"
              />
            </div>
             {/* <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2 ">
              <Clock size={12} />
              Set Expiration
            </div> */}
    
          {/* <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/40">
            <Field orientation="horizontal" className="px-4 py-3 text-sm text-white/30 border-r border-white/10 bg-white/5 whitespace-nowrap">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          <Clock className='pt-2'/>
        </FieldLabel>
      </FieldContent>
      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="text-white w-[300px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/40"
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={date}
        />
      </PopoverContent>
    </Popover>
    </Field>
          </div>     
            <div className="flex items-center gap-1.5 text-xs text-white/40 mb-2">
              <QrCode size={12} />
              Generate QR Code  
            </div> */}

            {/* <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/40">
            <Field orientation="horizontal" className="px-4 py-3 text-sm text-white/30 border-r border-white/10 bg-white/5 whitespace-nowrap">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">
          <QrCode/>
        </FieldLabel>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
            </div> */}
            <div>
            </div>
          </div>

        {/* Feature toggles */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {features.map(({ id, icon: Icon, label, color, bg }) => (
            <button
              key={id}
              onClick={() => setActiveFeature(activeFeature === id ? null : id)}
              className="feature-card flex flex-col items-center gap-2 py-4 px-2 rounded-xl border text-center transition-all"
              style={{
                borderColor: activeFeature === id ? color : 'rgba(255,255,255,0.08)',
                background: activeFeature === id ? bg : 'rgba(255,255,255,0.03)',
              }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: bg, border: `1px solid ${color}30` }}>
                <Icon size={17} style={{ color }} />
              </div>
              <span className="text-xs font-medium leading-tight"
                style={{ color: activeFeature === id ? color : 'rgba(255,255,255,0.55)' }}>
                {label}
              </span>
            </button>
          ))}
        </div> */}

        {/* Result */}
        {shortened && (
          <div className="mt-4 flex items-center justify-between px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 animate-slide-up-1">
            <div>
              <div className="text-xs text-white/40 mb-0.5">Your short link is ready!</div>
              <a href={`${shortened}`} target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                {shortened}
              </a>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(shortened)}
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors font-medium"
            >
              Copy
            </button>
          </div>
        )}
 {/* Error */}
        {error && (
  <div className="mt-4 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/5 animate-slide-up-1">
    <div className="text-xs text-red-400 font-medium mb-1">
      Failed to create short URL
    </div>
    <div className="text-sm text-red-300">
      {error}
    </div>
  </div>
)}
      </div>
    </div>
  )
}
