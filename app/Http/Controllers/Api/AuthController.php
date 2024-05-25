<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // protected function create(Request $request)
    // {
    //     // Validate the incoming request data
    //     $validatedData = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:users,email',
    //         'password' => 'required|string|min:8',
    //     ]);

    //     // Create the user if validation passes
    //     $user = User::create([
    //         'name' => $validatedData['name'],
    //         'email' => $validatedData['email'],
    //         'password' => Hash::make($validatedData['password']),
    //     ]);

    //     // Generate a token for the user
    //     $user->token = $user->createToken('Admin-auth')->plainTextToken;

    //     return ['user' => $user , 'token' => $user->token];
    // }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        
        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth')->plainTextToken;
        $user->token = $token;
        // return response()->json([
        //     'status' => true,
        //     'message' => 'User logged in successfully',
        //     'data' => $user,
        // ]);
        return response()->json([
            'status' => true,
            'message' => 'User create in successfully',
            'data' => ['user' => $user, 'token' => $token],
        ]);
       
    }

    public function create(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Create the user
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // Save the user if not exists
        if (!$user->save()) {
            return response()->json(['message' => 'Failed to register user'], 500);
        }

        // Generate token
        $token = $user->createToken('authToken')->plainTextToken;

        // Return success response with token

        return response()->json([
            'status' => true,
            'message' => 'User create in successfully',
            'data' => ['user' => $user, 'token' => $token],
        ]);
        // return response()->json(['token' => $token], 201);
    }

    //logout api
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'User successfully logged out']);
    }

}
