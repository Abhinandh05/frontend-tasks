import { MdOutlineTranslate } from "react-icons/md";

const LanguageSelector = () => {
    return (
        <div className="flex items-center gap-2 border border-[#E2E4E9] rounded-lg px-2 py-1 w-[179px] h-[32px]">
      <span className="flex items-center gap-1 text-[14px] font-inter text-gray-700">
        <MdOutlineTranslate className="w-3 h-3" />
        English
      </span>

            <select className="ml-auto bg-transparent outline-none">
                <option></option>
                <option>English</option>
                <option>Hindi</option>
                <option>Tamil</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
