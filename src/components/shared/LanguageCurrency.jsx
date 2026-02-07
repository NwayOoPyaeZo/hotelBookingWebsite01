import { useEffect, useState } from "react";
import { getLocales } from "../../services/locale";

const LanguageCurrency = () => {
    const [locales, setLocales] = useState([]);
    const [current, setCurrent] = useState(null);
    const [open, setOpen] = useState(false);

    // Load locales and default/current from localStorage or API
    useEffect(() => {
        getLocales().then((data) => {
            setLocales(data);
            if (data.length === 0) return;
            const saved = localStorage.getItem("locale");
            if (saved) {
                setCurrent(JSON.parse(saved));
            } else {
                setCurrent(data[0]);
            }
        });
    }, []);

    // Persist current to localStorage
    useEffect(() => {
        if (current) {
            localStorage.setItem("locale", JSON.stringify(current));
        }
    }, [current]);

    // Attach listeners only when dropdown is open
    useEffect(() => {
        if (!open) return;
        const close = () => setOpen(false);
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("click", close);
        window.addEventListener("scroll", close);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("click", close);
            window.removeEventListener("scroll", close);
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    // Prevent background scroll on mobile when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!current) return null;

    return (
        <div className="relative">
            {/* Trigger */}
            <button
                onClick={e => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center justify-center gap-5 w-auto lg:w-[79px] h-[48px] p-2 rounded-xl border-none bg-transparent transition active:scale-95 hover:bg-gray-50"
            >
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src={current.flag}
                        alt={current.language}
                        className="w-[24px] h-[24px] rounded-full object-cover"
                        onError={e => (e.currentTarget.style.display = "none")}
                    />
                </div>
                <span className="text-[16px] w-[32px] h-[20px] font-medium text-[#0057FF] leading-5">
                    {current.currency}
                </span>
            </button>

            {/* Dropdown/modal: mobile and desktop */}
            {open && ( 
                <>
                    {/* Mobile overlay */}
                    <div className="fixed inset-0 bg-black/30 z-40 sm:hidden" />
                    
                    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-xl z-50 sm:absolute sm:bottom-auto sm:left-auto sm:right-0 sm:mt-2 sm:w-52 w-auto" role="listbox">
                        {locales.map((item) => (
                            <button
                                key={item.code}
                                onClick={e => {
                                    e.stopPropagation();
                                    setCurrent(item);
                                    setOpen(false);
                                }}
                                className="
                                    flex items-center gap-3
                                    w-full px-4 py-3
                                    hover:bg-gray-50
                                    active:bg-gray-100
                                    text-left
                                    min-h-[44px]
                                "
                            >
                                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.flag}
                                        alt={item.language}
                                        className="w-[24px] h-[24px] rounded-full object-cover"
                                        onError={e => (e.currentTarget.style.display = "none")}
                                    />
                                </div>
                                <span className="text-sm">
                                    {item.currency}
                                </span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageCurrency;
