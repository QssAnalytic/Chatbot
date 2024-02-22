import { Button } from "@/common/components/ui/button";
import { cn } from "@/common/lib/utils";
import { IoPauseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Chatbot() {
  return (
    <>
      <div className="header mb-5">
        <div className="container m-auto">
          <div className="header-inner flex justify-between">
            <div className="logo flex gap-3 items-center">
              <IoPauseSharp color="#AD8449" size={30} />
              <h1 className="text-[25px] text-white">Tarmac AI</h1>
            </div>
            <div className="login">
              <Button className={cn("text-[25px] flex gap-3 items-center")}>
                Log In <FaUser />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <main className="main">
        <div className="container">
          <div className="main-inner flex justify-between">
            <div className="chat basis-[78%] flex flex-col">
              <div className="messages"></div>
              <div className="chat-input"></div>
            </div>
            <div className="dasboard-plugins border border-[#3B3C3F] basis-[20%] rounded-md"></div>
          </div>
        </div>
      </main>
    </>
  );
}
