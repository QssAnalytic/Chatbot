import { Button } from "@/common/components/ui/button";
import { cn } from "@/common/lib/utils";
import { IoPauseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem } from "@/common/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/common/components/ui/textarea";
import { Send } from "lucide-react";
import plugin from "@/assets/plugin.svg";
import { Switch } from "@/common/components/ui/switch";

export default function Chatbot() {
  const form = useForm();

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
      <main className="main h-[100%]">
        <div className="container">
          <div className="main-inner flex gap-5 justify-between">
            <div className="chat basis-[78%] flex flex-col justify-between gap-4">
              <div className="messages flex flex-col gap-3 basis-[90%] pr-7">
                <div className="tarmac w-[500px] flex flex-col gap-4">
                  <h4 className="text-[#fff] text-xl">Tarmac</h4>
                  <p className="response bg-[#FFFFFF] px-2 py-6 rounded-bl-[25px] rounded-tr-[25px] rounded-br-[25px]">
                    You are connected to 123Loadboard. Please provide transportation details, including origin,
                    destination, radius, and type of load, to initiate the search.
                  </p>
                </div>
                <div className="user w-[500px] flex flex-col gap-4 self-end items-end">
                  <h4 className="text-[#fff] text-xl">You</h4>
                  <p className="response bg-[#101215] text-[#fff] px-2 py-6 border border-[#3B3C3F] rounded-bl-[25px] rounded-tl-[25px] rounded-br-[25px]">
                    You are connected to 123Loadboard. Please provide transportation details, including origin,
                    destination, radius, and type of load, to initiate the search.
                  </p>
                </div>
              </div>
              <div className="form w-full">
                <Form {...form}>
                  <form className="flex gap-2 w-full items-center">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem className={cn("w-full")}>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us a little bit about yourself"
                              className={cn(`w-full bg-[#393A3D] text-white border-none leading-5`)}
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className={cn("bg-[#AD8449] rounded-[104px] px-3 py-1 flex items-center w-[48px] h-[48px]")}>
                      <Send color="#E9E8E8" size={39} />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <div className="h-[900px] dasboard-plugins flex flex-col gap-7 border border-[#3B3C3F] basis-[20%] rounded-md px-7 py-5">
              <div className="btns flex gap-3">
                <Button className={cn(`px-5 py-2 bg-[#26272A] text-base`)}>Dashboard</Button>
                <Button className={cn(` px-8 py-2 bg-[#AD8449] text-base`)}>Plugins</Button>
              </div>
              <div className="plugins-list flex flex-col gap-4 overflow-y-scroll">
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
                <div className="plugin px-4 py-3 bg-[#3F3F3F] bg-opacity-[45%] flex flex-col gap-4 rounded-md">
                  <div className="plugin-header flex justify-between items-center">
                    <div className="logo-name flex gap-3">
                      <img src={plugin} alt="plugin" />
                      <h4 className="text-[#eaeaea]">Doft</h4>
                    </div>
                    <div className="plugin-switch">
                      <Switch />
                    </div>
                  </div>
                  <div className="plugin-info">
                    <p className="text-[#eaeaea] text-xs">Get access to 105000+ loads daily</p>
                  </div>
                  <div className="plugin-btns flex gap-4">
                    <Button className={cn("bg-[#AD8449] text-[#fff]")}>Terms of use</Button>
                    <Button className={cn(`border border-[#AD8449] text-[#AD8449] bg-[#3F3F3F] bg-opacity-[45%]`)}>
                      Privacy
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
