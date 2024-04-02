<?php

namespace App\Http\Controllers\TodoList;

use App\Http\Controllers\Controller;
use App\Models\TodoTask;
use Illuminate\Http\Request;

class TodoListController extends Controller
{
    public function index()
    {
        $todoLists = TodoTask::all();
        return response()->json($todoLists);
    }

    public function store(Request $request)
    {

        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'user_id' => ['required'],
        ]);

        TodoTask::create([
            'title' => $request->title,
            'user_id' => $request->user_id,
        ]);

        return response()->noContent();
    }
}
