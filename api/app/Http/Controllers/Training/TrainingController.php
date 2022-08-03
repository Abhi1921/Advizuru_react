<?php

namespace App\Http\Controllers\Training;

use DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recruitment;
use App\Models\Business;
use App\Models\AddSubContract;
use App\Models\Training;
use App\Models\TrainerProgram;
use Validator;
use JWTAuth;


class TrainingController extends Controller
{
    public function addTrainingProfile(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new Training;

            // $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->experience = $request->input('experience');
            // $user->industry_id = $request->input('industry_id');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->mode = $request->input('mode');

            $user->availability = $request->input('availability');
            $user->certification = $request->input('certification');
            $user->location = $request->input('location');
            $user->other_info = $request->input('other_info');
            $user->contact_email = $request->input('contact_email');
            $user->contact_mobile = $request->input('contact_mobile');


            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'training Profile data Successfully stored',
                'data' => $user
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'error' => true,
                'message' =>  $e
            ], 201);
        }
    }


    // 
    public function addTrainerProgram(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new Training;

            // $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->experience = $request->input('experience');
            // $user->industry_id = $request->input('industry_id');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->mode = $request->input('mode');

            $user->availability = $request->input('availability');
            $user->certification = $request->input('certification');
            $user->location = $request->input('location');
            $user->other_info = $request->input('other_info');
            $user->contact_email = $request->input('contact_email');
            $user->contact_mobile = $request->input('contact_mobile');


            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'training Profile data Successfully stored',
                'data' => $user
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'error' => true,
                'message' =>  $e
            ], 201);
        }
    }
}
