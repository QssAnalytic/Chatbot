import { IoPauseSharp } from "react-icons/io5";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/common/lib/utils";
import { Button } from "@/common/components/ui/button";

export default function Login() {
  const form = useForm();

  return (
    <div className="login h-[100vh]">
      <div className="login-container h-full">
        <div className="login-inner h-full flex flex-col gap-14 justify-center items-center  translate-x-[0%] translate-y-[-10%]">
          <div className="login-header flex gap-3">
            <div className="login-logo">
              <IoPauseSharp color="#AD8449" size={30} />
            </div>
            <div className="login-name text-[#fff] text-2xl">Tarmac AI</div>
          </div>
          <div className="login-form">
            <Form {...form}>
              <form className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className={cn("w-[300px] flex flex-col gap-3")}>
                      <FormLabel className={cn("text-[#fff]")}>Username</FormLabel>
                      <FormControl>
                        <Input
                          className={cn(
                            "bg-[#393A3D] text-[#fff] border-none focus-visible:outline-1 focus-visible:outline-[#AD8449]",
                          )}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className={cn("w-[300px] flex flex-col gap-3")}>
                      <FormLabel className={cn("text-[#fff]")}>Password</FormLabel>
                      <FormControl>
                        <Input
                          className={cn(
                            "bg-[#393A3D] text-[#fff] border-none focus-visible:outline-1 focus-visible:outline-[#AD8449]",
                          )}
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className={cn("bg-[#AD8449] py-4 px-3")}>Sign In</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
