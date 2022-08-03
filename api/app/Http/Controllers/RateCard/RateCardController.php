<?php

namespace App\Http\Controllers\RateCard;

use DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MyProjectDescription;
use App\Models\Business;
use App\Models\AddSubContract;
use App\Models\RateCard;
use Validator;
use JWTAuth;

class RateCardController extends Controller
{
    // insert rate card
    public function addRateCard(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new RateCard;

            // $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->skill_level = $request->input('skill_level');
            $user->industry_id = $request->input('industry_id');
            $user->job_profile = $request->input('job_profile');
            $user->years_of_experience = $request->input('years_of_experience');
            $user->expected_cost = $request->input('expected_cost');
            $user->workingrate = $request->input('workingrate');
            $user->currency_id = $request->input('currency_id');
            $user->total_num_of_res = $request->input('total_num_of_res');
            $user->total_num_of_avl_res = $request->input('total_num_of_avl_res');
            $user->availability = $request->input('availability');
            $user->Relocation = $request->input('Relocation');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->description = $request->input('description');
            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'Rate Card data Successfully stored',
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

    // crud rate card
    public function updateRateCard(Request $request, RateCard $User)
    {
        $data = $request->only(' skill_id', 'skill_level', 'industry_id', 'job_profile', 'years_of_experience', 'total_num_of_avl_res', 'availability', 'Relocation', 'currency_id');
        $validator = Validator::make($data, [
            'skill_id' => 'integer',
            'skill_level' => 'string',
            'years_of_experience' => 'string',
            'client_name' => 'string',
            'job_profile' => 'string',
            'industry_id' => 'integer',
            'expected_cost' => 'integer',
            'total_num_of_res' => 'integer',
            'currency_id' => 'string',
            'workingrate' => 'string',
            'total_num_of_avl_res' => 'string',
            'Relocation' => 'string',
            'availability' => 'string',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([
            'skill_level' => $request->skill_level,
            'job_profile' => $request->job_profile,
            'expected_cost' => $request->expected_cost,
            'industry_id' => $request->industry_id,
            'skill_id' => $request->skill_id,
            'workingrate' => $request->workingrate,
            'currency_id' => $request->currency_id,
            'total_num_of_res' => $request->total_num_of_res,
            'total_num_of_avl_res' => $request->total_num_of_avl_res,
            'availability' => $request->availability,
            'Relocation' => $request->Relocation,
            'country_id' => $request->country_id,
            'state_id' => $request->state_id,
            'city_id' => $request->city_id,
            'description' => $request->description,

        ]);
        return response()->json([
            'success' => true,
            'message' => 'rateCard data successfully stored',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyrateCard(RateCard $User)
    {
        $User->delete();
        return response()->json([
            'success' => true,
            'message' => 'RateCard deleted successfully',
        ]);
    }
    // End rate card

    // MyProject Description

    // /**
    //  * Get Detail Profile
    //  * @OA\post (
    //  *     path="/api/myproject/add",
    //  *     tags={"Freelancer"},
    //  *  security={
    //  *    {
    //  *     "passport": {}},
    //  *    },
    //  *     @OA\Parameter(
    //  *         in="query",
    //  *         name="skill_id",
    //  *         required=true,
    //  *         @OA\Schema(type="integer")
    //  *     ),
    //  *
    //  *     @OA\Parameter(
    //  *         in="query",
    //  *         name="project_name",
    //  *         required=true,
    //  *         @OA\Schema(type="string")
    //  *     ),
    //  *          @OA\Parameter(
    //  *         in="query",
    //  *         name="project_description",
    //  *         required=true,
    //  *         @OA\Schema(type="string")
    //  *     ),
    //  *           @OA\Parameter(
    //  *         in="query",
    //  *         name="project_duration_month",
    //  *         required=true,
    //  *         @OA\Schema(type="integer")
    //  *     ),
    //  *     @OA\Response(
    //  *         response=200,
    //  *         description="success",
    //  *         @OA\JsonContent(
    //  *              @OA\Property(property="id", type="number", example=1),
    //  *              @OA\Property(property="type", type="string", example="bearer token"),
    //  *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
    //  *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
    //  *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
    //  *         )
    //  *     )
    //  * )
    //  */
    public function MyProjectDescription(Request $request)
    {
        $user = new MyProjectDescription;
        // $user->user_id = Auth::User()->id;
        $user->skill_id = $request->input('skill_id');
        $user->client_name = $request->input('client_name');
        $user->project_name = $request->input('project_name');
        $user->total_num_of_res_project = $request->input('total_num_of_res_project');
        $user->industry_id = $request->input('industry_id');
        $user->project_description = $request->input('project_description');
        $user->save();
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'User Project successfully registered',
            'data' => $user,
        ], 201);
    }


    // CRUD PROJECT Description

    public function updateProjectDescription(Request $request, MyProjectDescription $User)
    {
        //Validate data
        $data = $request->only(' project_name', 'client_name', 'industry_id', 'skill_id', 'total_num_of_res_project');
        $validator = Validator::make($data, [
            'project_name' => 'string',
            'project_description' => 'integer',
            'total_num_of_res_project' => 'integer',
            'client_name' => 'string',
            'skill_id' => 'integer',
            'industry_id' => 'integer',

        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([
            'project_name' => $request->project_name,
            'project_description' => $request->project_description,
            'client_name' => $request->client_name,
            'industry_id' => $request->industry_id,
            'skill_id' => $request->skill_id,
            'total_num_of_res_project' => $request->total_num_of_res_project,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Project Description updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyorg(MyProjectDescription $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'Project Description deleted successfully',
        ]);
    }
    // My Project Description
}
