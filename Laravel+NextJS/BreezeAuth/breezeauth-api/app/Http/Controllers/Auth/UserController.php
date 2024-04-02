<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function store(){
        // Retrieve the authenticated user
        $user = Auth::user();

        // Return the user as a JSON response
        return response()->json($user);
    }
}
