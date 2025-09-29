import sessions from "@/constants";
import {MdOutlineTranslate} from "react-icons/md";
import LanguageSelector from "@/components/LanguageSelector";
import LiveSection from "@/components/LiveSection";

const Page = async ({ params }) => {
    const resolvedParams = await params;
    const session = sessions.find((s) => s.id === Number(resolvedParams.sessionId));

    if (!session) {
        return (
            <div className="p-4 sm:p-6 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                        Session not found
                    </h2>
                    <p className="text-sm text-gray-600">
                        The requested session could not be found.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Container - Fully Responsive */}
            <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16
                           pt-4 xs:pt-5 sm:pt-6 md:pt-8 lg:pt-10
                           pb-6 xs:pb-8 sm:pb-10 md:pb-12 lg:pb-16">

                {/* Content Wrapper - Responsive Width */}
                <div className="w-full max-w-none xs:max-w-none sm:max-w-none md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl
                               mx-auto flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-6 lg:gap-8">

                    {/* Header Section - Responsive Layout */}
                    <div className="flex flex-col xs:flex-col sm:flex-row
                                   gap-3 xs:gap-4 sm:gap-4 md:gap-6
                                   justify-between items-start sm:items-center">

                        {/* Title and Date - Mobile First */}
                        <div
                            className="flex flex-col gap-1 xs:gap-1.5 sm:gap-2 flex-1 min-w-0
             -mt-[50px] ml-[130px]"
                        >
                            <h1
                                className="font-medium text-black-100
               text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-xl
               leading-tight break-words hyphens-auto"
                            >
                                {session.title}
                            </h1>
                            <p
                                className="text-gray-100
               text-xs xs:text-sm sm:text-sm md:text-base
               opacity-80"
                            >
                                {session.date}
                            </p>
                        </div>


                        {/* Language Selector - Responsive Positioning */}
                        <div className="flex-shrink-0 w-full xs:w-auto sm:w-auto">
                            <div className="flex justify-start xs:justify-start sm:justify-end">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>

                    {/* Live Section Container - Fully Responsive Height */}
                    <div className="w-full
                                   h-auto min-h-[300px] xs:min-h-[320px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]
                                   flex items-center justify-center
                                   rounded-lg xs:rounded-xl sm:rounded-2xl
                                   overflow-hidden">
                        <LiveSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;