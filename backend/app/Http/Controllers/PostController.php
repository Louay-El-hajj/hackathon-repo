<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Post;
use App\Models\User;


class PostController extends Controller
{
    public function create_post(Request $req)
    {
        // if($req->hasFile('image')){
        //     $file = $req->file('image');
        //     $extension = $file->getClientOriginalExtension();
        //     $filename = time(). ".". $extension;
        //     $file->move(public_path('/posts'), $filename);
        // }
        $post = Post::create([
            // "image" => $filename,
            "description" => $req->description,
            "user_id" => $req->user_id,
            // "location" => $req->location,
        ]);

        return response()->json([
            "message" => "Post created successfully"
        ], 201);
    }
}
