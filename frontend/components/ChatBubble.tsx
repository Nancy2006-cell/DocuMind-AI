type Props = {
  sender: "user" | "ai";
  message: string;
};

export default function ChatBubble({
  sender,
  message,
}: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-xl px-5 py-3 ${
          isUser
            ? "bg-cyan-500 text-white"
            : "bg-slate-700 text-white"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}