import CommentContent from "./commentContent";

export default function CommentsList(props) {
  return (
    <div className="flex ">
      <div className="w-20"></div>
      <ul className="list-none w-full pb-14 md:pb-0 border-l-2	 border-context_color">
        {props.commentsList.map((comment, index) => (
          <li key={index}>
            <CommentContent commentDetails={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
