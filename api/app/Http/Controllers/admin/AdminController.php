<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserSkillDetails;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    
    public function index()
    {
        $users = DB::table('users')->select('id', 'name', 'email')->get();

        return view('admin.list')->with('users', $users);
    }
    public function userskills()
    {
         $users = DB::table('user_skill_details')->select('id', 'user_id', 'skill_id')->get();

        return view('admin.userskills')->with('users', $users);
    }
}
