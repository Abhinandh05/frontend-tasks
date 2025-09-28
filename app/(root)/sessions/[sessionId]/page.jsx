import sessions from "@/constants";
import {MdOutlineTranslate} from "react-icons/md";
import LanguageSelector from "@/components/LanguageSelector";
import LiveSection from "@/components/LiveSection";

const Page = async ({ params }) => {
    const resolvedParams = await params;
    const session = sessions.find((s) => s.id === Number(resolvedParams.sessionId));

    if (!session) {
        return <div className="p-6">Session not found</div>;
    }

    return (
        <div className="p-6 -mt-5 mr-25">
            <div className="w-[776px] flex flex-col gap-4 mx-auto">
                <div className="flex justify-between items-center">
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


                <div className="w-full h-[400px]">
                    <LiveSection />
                </div>
            </div>
        </div>
    );
};

export default Page;