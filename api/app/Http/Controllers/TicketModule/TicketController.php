<?php

namespace App\Http\Controllers\TicketModule;

use DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Recruitment;
use App\Models\Business;
use App\Models\AddSubContract;
use App\Models\AddService;
use Validator;
use JWTAuth;

class TicketController extends Controller
{
    
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }  

    // addRecruitment

    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/add/recruitment",
     *     tags={"Ticket Module"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="title",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="min_experience",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="max_experience",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="minimim_budget",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="max_budget",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="notes",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruitment_consulting_pct",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruiter_email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function addRecruitment(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new Recruitment;

            // $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->designation_id = $request->input('designation_id');
            $user->industry_id = $request->input('industry_id');
            $user->title = $request->input('title');
            $user->min_experience = $request->input('min_experience');
            $user->max_experience = $request->input('max_experience');
            $user->minimum_budget = $request->input('minimum_budget');
            $user->max_budget = $request->input('max_budget');
            $user->upload_image = $request->input('upload_image');
            $user->notes = $request->input('notes');
            $user->vendor_recruitment_company = $request->input('vendor_recruitment_company');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->education_qualification = $request->input('education_qualification');
            $user->recruitment_consulting_pct = $request->input('recruitment_consulting_pct');
            $user->recruiter_email = $request->input('recruiter_email');
            $user->status = $request->input('status');
            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'Recruitment data Successfully stored',
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

    // addRecruitment End

    // edit delete 

    public function updateRecruitment(Request $request, Recruitment $User)
    {

        $data = $request->only('max_experience', 'min_experience', 'title', 'skill_id');
        $validator = Validator::make($data, [
            'max_experience' => 'integer',
            'min_experience' => 'integer',
            'title' => 'string',

        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is valid, update product
        $User = $User->update([

            'min_experience' => $request->min_experience,
            'max_experience' => $request->max_experience,
            'industry_id' => $request->industry_id,
            'title' => $request->title,
            'skill_id' => $request->skill_id,
            'designation_id' => $request->designation_id,


        ]);

        //Product updated, return success response
        return response()->json([
            'success' => true,
            'message' => 'Recruitment updated successfully',
            'data' => $User
        ]);
    }

    public function destroyEducation(Recruitment $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'Education deleted successfully'
        ]);
    }

    // End





    // start Add Bussiness

    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/add/bussiness-lead",
     *     tags={"Ticket Module"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="heading",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="effort_required",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="expected_cost",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="expected_cost_currency",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="	contact_person_email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruitment_consulting_pct",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruiter_email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="start_date",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="description",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

    public function bussinesslead(Request $request)
    {

        DB::beginTransaction();
        try {
            $user = new Business;

            //   $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->category_id = $request->input('category_id');
            $user->industry_id = $request->input('industry_id');
            $user->heading = $request->input('heading');
            $user->service_type_id = $request->input('service_type_id');
            $user->effort_required = $request->input('effort_required');
            $user->effort_type = $request->input('effort_type');
            $user->contact_person = $request->input('contact_person');
            $user->expected_cost_currency = $request->input('expected_cost_currency');
            // $user->contact_person_email = $request->input(['contact_person_email' => 'required|unique']);
            // $user->contact_person_mobile = $request->input('contact_person_mobile');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->start_date = date("Y-m-d", strtotime($request->input('start_date')));
            $user->recruitment_consulting_pct = $request->input('recruitment_consulting_pct');
            // $user->contact_person_email = $request->input('contact_person_email');
            $user->description = $request->input('description');
            $user->status = $request->input('status');
            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'bussiness data Successfully stored',
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
    // End Add Business


    // ADD Service


    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/add/service",
     *     tags={"Ticket Module"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="title",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="expected_cost",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="service_cost",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="expected_cost_currency",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="notes",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

    public function addService(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new AddService;

            //  $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->category_id = $request->input('category_id');
            $user->industry_id = $request->input('industry_id');
            $user->title = $request->input('title');
            $user->service_type_id = $request->input('service_type_id');
            $user->upload_image = $request->input('upload_image');
            $user->expected_cost_currency = $request->input('expected_cost_currency');
            $user->facebook_url = $request->input('facebook_url');
            $user->twitter_url = $request->input('twitter_url');
            $user->country_id = $request->input('country_id');
            $user->state_id = $request->input('state_id');
            $user->city_id = $request->input('city_id');
            $user->linkedin_url = $request->input('linkedin_url');
            $user->service_cost = $request->input('service_cost');
            $user->upload_document = $request->input('upload_document');

            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'data Successfully stored',
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

    // End Add Service


    // projects/sub_contract Start


    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/add/sub-contract",
     *     tags={"Ticket Module"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="project_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="start_date",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="end_date",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruitment_consulting_pct",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="recruiter_email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="notes",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="effort_required",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),       
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

    public function addSubContract(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new AddSubContract;
            //   $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->functional_id = $request->input('functional_id');
            $user->industry_id = $request->input('industry_id');
            $user->project_name = $request->input('project_name');
            $user->availability = $request->input('availability');
            $user->effort_required = $request->input('effort_required');
            //  $user->expected_cost_currency = $request->input('expected_cost_currency');
            $user->start_date = date("Y-m-d", strtotime($request->input('start_date')));
            $user->end_date = date("Y-m-d", strtotime($request->input('end_date')));
            $user->payment_type = $request->input('payment_type');
            $user->estimated_cost = $request->input('estimated_cost');
            $user->city_id = $request->input('city_id');
            $user->currency = $request->input('currency');
            $user->experienced_required = $request->input('experienced_required');
            $user->qualification_desired = $request->input('qualification_desired');
            $user->other_requirement = $request->input('other_requirement');
            $user->vendor_recruitment_company = $request->input('vendor_recruitment_company');
            $user->city_id = $request->input('city_id');
            $user->notes = $request->input('notes');
            $user->recruitment_consulting_pct = $request->input('recruitment_consulting_pct');
            $user->recruiter_email = $request->input('recruiter_email');

            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => ' Sub Contract data Successfully stored',
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

    // project/sub_contract End

}
