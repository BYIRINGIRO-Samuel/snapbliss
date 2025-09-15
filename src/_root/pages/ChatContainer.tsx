import ChatHeader from "@/components/shared/ChatHeader"
import MessageSkeleton from "./skeletons/MessageSkeleton"

const ChatContainer = () => {

  return (
    <div className="flex-1 flex flex-col overflow-auto">
     <ChatHeader/> 
      <MessageSkeleton />
    </div>
  )
}

export default ChatContainer
