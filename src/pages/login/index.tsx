import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styled from "styled-components";

// importing login image 
import login_img from "../../assets/login.jpg";

export default function Login() {
    return (

        <div className="h-screen flex items-center justify-between gap-5 px-10">

            <div className="h-[90%] flex-[.4] bg-gray-100 shadow-md rounded-lg p-6 flex flex-col justify-end " >
                <img src={login_img} alt="image of the women which is working" className="h-full mb-5" />
                <div className="space-y-2">
                    <div>
                        <h2 className="flex items-center gap-1 text-2xl font-medium"><span className="bg-sky-700 text-white rounded-full h-8 w-8 grid place-items-center text-lg">I</span>Manager</h2>
                    </div>
                    <h2 className="text-2xl font-medium text-gray-800 mb-5">
                        Управляйте всем своим проектом, двигайтесь быстро, оставайтесь согласованными и стройте лучше — вместе
                    </h2>
                </div>
                <p className="mt-6">Работа становится намного более заметной, когда все находится в одном месте, и это значительно упрощает совместную работу.
                </p>
            </div>

            <CardBg className="flex-[.5] border-none shadow-md ">
                <CardHeader>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <h2 className="flex items-center gap-1 text-2xl font-medium"><span className="bg-sky-700 text-white rounded-full h-8 w-8 grid place-items-center text-lg">I</span>Manager</h2>
                            <h2 className="mt-2 text-center text-2xl font-medium text-gray-900">
                                Сначала войдите в свою учетную запись
                            </h2>
                        </div>

                    </div>
                </CardHeader>
                <CardContent className="mt-8 space-y-6 ">
                    <input name="remember" type="hidden" value="true" />
                    <div className="rounded-md  space-y-4">
                        <div>
                            <Label htmlFor="username" className="text-lg">Username</Label>
                            <Input
                                autoComplete="username"
                                className="bg-transparent block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:ring-indigo-500   focus:border-none"
                                id="username"
                                name="username"
                                placeholder="Username"
                                required
                                type="text"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" className="text-lg">Password</Label>
                            <Input
                                autoComplete="current-password"
                                className="bg-transparent block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:ring-indigo-500 focus:border-none"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                type="password"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center justify-between">

                    <Button variant="outline" className="w-full text-white hover:text-white">Войти</Button>
                    <div className="text-sm mt-2">
                        <a className="font-medium text-teal-600 hover:text-teal-500 " href="#">
                            Забыли пароль?

                        </a>
                    </div>
                </CardFooter>
            </CardBg>
        </div>
    )
}

const CardBg = styled.div`

  border-radius: 30px;
background: rgba(255, 255, 255, 0.05);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);


& input::placeholder{
    font-size: 16px;

}
`