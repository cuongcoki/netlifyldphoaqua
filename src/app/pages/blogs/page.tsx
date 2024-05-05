import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Textarea } from "@/components/ui/textarea"
import {MoreVertical,ThumbsUp,MessageCircle,Forward} from "lucide-react"
import Image from "next/image"


export default function Page() {
    return (
        <div className="flex flex-col flex-wrap items-center mt-16 gap-5">
            <Card className="w-[650px] h-[630px] ">
                <CardHeader>
                    <div className={`flex justify-between items-center overflow-hidden transition-all`}>
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="font-medium dark:text-white">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">4/21/2014</div>
                            </div>
                        </div>
                        <MoreVertical size={20} />
                    </div>

                    <img style={{ textAlign: 'center' }} src='https://blackmorepartnersinc.com/wp-content/uploads/2016/07/13567303_10209350818428755_9132669584900230872_n.jpg' alt={""} width='full' height={200} />
                    <CardTitle>Chicago City</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ToggleGroup type="single" >
                        <ToggleGroupItem value="a"><ThumbsUp />Like</ToggleGroupItem>
                        <ToggleGroupItem value="b"><MessageCircle />Comment</ToggleGroupItem>
                        <ToggleGroupItem value="c"><Forward />Share</ToggleGroupItem>
                    </ToggleGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex w-full">
                        <Avatar className="mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Textarea placeholder="Type your message here." style={{ width: 'full', height: '20px' }} />
                    </div>
                </CardFooter>
            </Card>

            <Card className="w-[650px] h-[620px] ">
                <CardHeader>
                    <div className={`flex justify-between items-center overflow-hidden transition-all`}>
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="font-medium dark:text-white">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">4/21/2014</div>
                            </div>
                        </div>
                        <MoreVertical size={20} />
                    </div>

                    <img style={{ textAlign: 'center' }} src='https://blackmorepartnersinc.com/wp-content/uploads/2016/07/13567303_10209350818428755_9132669584900230872_n.jpg' alt={""} width='full' height={200} />
                    <CardTitle>Chicago City</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ToggleGroup type="single" >
                        <ToggleGroupItem value="a"><ThumbsUp />Like</ToggleGroupItem>
                        <ToggleGroupItem value="b"><MessageCircle />Comment</ToggleGroupItem>
                        <ToggleGroupItem value="c"><Forward />Share</ToggleGroupItem>
                    </ToggleGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <div className="flex w-full">
                        <Avatar className="mr-2">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Textarea placeholder="Type your message here." style={{ width: 'full', height: '20px' }} />
                    </div>
                </CardFooter>
            </Card>
            
        </div>

    )
}