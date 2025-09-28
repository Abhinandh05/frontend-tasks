import sessions from "@/constants";
import {MdOutlineTranslate} from "react-icons/md";
import LanguageSelector from "@/components/LanguageSelector";

const Page = ({ params }) => {
    const session = sessions.find((s) => s.id === Number(params.sessionId));

    if (!session) {
        return <div className="p-6">Session not found</div>;
    }

    return (
        <div className="p-6 -mt-5">

            <div className="w-[776px] h-[50px] flex justify-between items-center ml-40 pb-3">

                <div className="flex flex-col gap-[6px]">
                    <h1 className="font-medium text-black-100 mb-1 text-2xl">
                        {session.title}
                    </h1>
                    <p className="text-gray-100 text-xs">
                        {session.date}
                    </p>
                </div>


            <LanguageSelector />

            </div>
        </div>
    );
};

export default Page;
