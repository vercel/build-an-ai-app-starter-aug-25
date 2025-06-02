/**
 * v0 by Vercel.
 * @see https://v0.dev/t/76Tp2StSWv0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MessageList({ messages: comments }: { messages: any[] }) {
  const currentUser = {
    initials: "YO",
    avatarSrc: "/placeholder-user.jpg",
  };
  return (
    <div className="px-4 py-6 space-y-6">
      <div className="grid gap-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarFallback>{comment.author.initials}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5 flex-1">
              <div className="flex items-center gap-2">
                <div className="font-medium">{comment.author.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {comment.timestamp}
                </div>
              </div>
              <div className="text-sm leading-relaxed">{comment.content}</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Button variant="ghost" size="icon">
                  <ReplyIcon className="w-4 h-4" />
                  <span className="sr-only">Reply</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ThumbsUpIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ThumbsDownIcon className="w-4 h-4" />
                  <span className="sr-only">Dislike</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <form className="grid gap-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarFallback>{currentUser.initials}</AvatarFallback>
            </Avatar>
            <div className="grid gap-2 flex-1">
              <Textarea
                placeholder="Write your comment..."
                className="p-4 min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button type="submit">Post Comment</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ReplyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ThumbsDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
