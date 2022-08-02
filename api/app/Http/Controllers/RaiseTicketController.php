<?php

namespace App\Http\Controllers;
use App\Models\RaiseTicket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use JWTAuth;
use App\Models\User;
use App\Models\freelancer;
use App\Models\ContactDetail;
use App\Models\Organisation;
use App\Models\professional_Information;
use App\Models\contact_us;
use App\Models\Financial_Information;
use Validator;
use DB;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

class RaiseTicketController extends Controller
{
    public function addRaiseTicket(Request $request)
    {
        DB::beginTransaction();
        try{
    $user = new RaiseTicket;
   
    // $user->user_id =Auth::User()->id;
    $user->skill_id= $request->input('skill_id');
     $user->location = $request->input('location');
    // $user->industry_id = $request->input('industry_id');
    $user->country_id = $request->input('country_id');
    $user->state_id = $request->input('state_id');
    $user->city_id = $request->input('city_id');
    $user->service= $request->input('service'); 
    $user->budget = $request->input('budget');
    $user->availability = $request->input('availability');
    $user->description= $request->input('description');
 
   
    $user->save();
  
    DB::commit();
    return response()->json([
        'status' => '200',
        'error' =>false,
        'message' => 'training Profile data Successfully stored',
        'data' => $user
    ], 201);   
}catch(\Exception $e){
    DB::rollBack();
    return response()->json([
        'status' => 'error',
        'error' =>true,
        'message' =>  $e
    ], 201);

}}
}
