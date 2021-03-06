import React from "react";
import { userData } from "../../App";
import { useAppSelector } from "../../redux/hooks";
import CommentsList from "../CommentsList/CommentsList";
import { SingleBarterPropsType } from "../components.data.type";
import "./SingleBarter.scss";

const SingleBarter: React.FC<SingleBarterPropsType> = ({ barter }) => {
	const { userData } = useAppSelector((state) => state.login);

	return (
		<div className="SingleBarter">
			<div className="SingleBarter__body">
				{barter.barter}
				<div className="SingleBarter__body-author">
					{barter.author.username}
				</div>
			</div>
			<div className="SingleBarter__footer">
				<div className="SingleBarter__teach">
					<p>I can teach:</p>
					<p>{barter.teach}</p>
				</div>
				<div className="SingleBarter__learn">
					<p>I want learn:</p>
					<p>{barter.learn}</p>
				</div>
				{barter.author.id === userData.id && (
					<div className="SingleBarter__options">
						<i className="far fa-edit"></i>
						<i className="far fa-trash-alt"></i>
					</div>
				)}
			</div>
			<CommentsList comments={barter.comments} />
		</div>
	);
};

export default SingleBarter;
