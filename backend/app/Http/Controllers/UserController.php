<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Follow;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $login = $request->input('login');
        $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $request->merge([$field => $login]);
        $credentials = $request->only($field, 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|max:255|unique:users|regex:/^[a-z0-9_]*[a-z]+[a-z0-9_]*$/u|lowercase',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'username' => $request->username,
            'password' => Hash::make($request->password),
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

    public function user_data()
    {
        $user = Auth::user();
        return response()->json([
            "user" => $user
        ]);
    }

    public function getAllUsers()
    {
        $users = User::all();

        return response()->json([
            "users" => $users
        ]);
    }

    public function get_user_by_id($param)
    {
        if (is_numeric($param)){
            $user = User::where("id", $param)->first();
        }else{
            $user = User::where("username", $param)->first();
        }
        
        $userFollowingCount = Follow::where("follower_id", $user->id)->count();
        $userFollowersCount = Follow::where("followed_id", $user->id)->count();


        return response()->json([
            "id"=>$user->id,
            "username" => $user->username,
            "description" => $user->description,
            "profile_image" => $user->profile_image,
            "following" => $userFollowingCount,
            "followers" => $userFollowersCount,
        ]);
    }

}



