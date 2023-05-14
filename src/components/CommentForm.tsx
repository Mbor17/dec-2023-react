import React, {FC} from "react";
import {IUseState} from "../types/useState.type";
import {IComment} from "../interfaces/comment.interface";
import {SubmitHandler, useForm} from "react-hook-form";
import comment from "./Comment";
import {commentService} from "../services/comment.service";

interface IProps{
setComments:IUseState<IComment[]>
}

const CommentForm:FC<IProps>=({setComments}) => {
    const {register, handleSubmit,reset} = useForm<IComment>();

    const save:SubmitHandler<Comment>=async {comment}=>{
 const {data} = await commentService.create(comment);
        setComments(prev=>[prev,data])
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'}{...register('name')} />
            <input type="text" placeholder={'email'}{...register('email')} />
            <input type="text" placeholder={'body'}{...register('body')} />
            <button>Save</button>
        </form>
    );
};

export default CommentForm;