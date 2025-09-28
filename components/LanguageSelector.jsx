import { MdOutlineTranslate } from "react-icons/md";

const LanguageSelector = () => {
    return (
        <div className="flex items-center gap-1 sm:gap-2 border border-[#E2E4E9] rounded-lg px-2 py-1 w-full min-w-[100px] max-w-[179px] sm:w-[179px] h-[32px]">
            <span className="flex items-center gap-1 text-xs sm:text-sm font-inter text-gray-700 flex-shrink-0">
                <MdOutlineTranslate className="w-3 h-3 flex-shrink-0" />
                <span className="hidden sm:inline">English</span>
                <span className="inline sm:hidden">EN</span>
            </span>

            <select className="ml-auto bg-transparent outline-none text-xs sm:text-sm font-inter text-gray-700 cursor-pointer flex-shrink-0 min-w-0">
                <option></option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="ta">Tamil</option>
            </select>
        </div>
    );
};

export default LanguageSelector;