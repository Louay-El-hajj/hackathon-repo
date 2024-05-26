<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Comment;

class CommentController extends Controller
{
    public function create_comment(Request $req){
        $comment = Comment::create([
            "comment" => $req->comment,
            "post_id" => $req->post_id,
            "user_id" => Auth::id(),
        ]);

        return response()->json([
            "message" => "Comment created successfully"
        ], 201);
    }

    public function get_comments($id){
        $comments = Comment::with("user")->where("post_id", $id)->get();

        if($comments->isEmpty()){
            return response()->json([
                "comments" => [],
                "message"=> "No comments to show"
            ]);
        }
        return response()->json([
            "comments"=>$comments
        ]);
    }
}
