<?php

namespace App\Http\Controllers\Freelancer;

use App\Http\Controllers\Controller;
use App\Models\Degree;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Institute;
use App\Models\myProject;
use DB;
use App\Models\Remuneration;
use App\Models\SelectProfile;
use App\Models\allSkills;
use App\Models\User;
use App\Models\UserSkillDetails;
use App\Models\visa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Log;

class FreelancerController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }
    // search profile

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/selectprofile",
     *     tags={"Freelancer"},

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
    public function SelectProfile()
    {
        $users = SelectProfile::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }

    // selectProfile End

    // allSkills

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/all-skills",
     *     tags={"Freelancer"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Response(
     *         response=200,
     *         description="success",

     *         @OA\JsonContent(
     *
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
    public function allSkills()
    {
        $skills = allSkills::all();
        return response()->json([
            'status' => 'success',
            'allSkills' => $skills,
        ]);
    }

    /**
     * Get Detail Profile
     * @OA\get (
     *     path="/api/searchskills/{name}",
     *     tags={"Freelancer"},
     *        security={
     *    {
     *     "passport": {}},
     *    },
     * *    @OA\Parameter(
     *         in="path",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *        ),
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
    public function searchskills($name)
    {
        return allSkills::where('name', 'LIKE', '%' . $name . '%')->get();
    }
    // Skills End

    // Institute

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/institute",
     *     tags={"Freelancer"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
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
    public function Institute()
    {
        $users = Institute::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }

    /**
     * Get Detail Profile
     * @OA\get (
     *     path="/api/searchinstitute/{name}",
     *     tags={"Freelancer"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="path",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *        ),
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
    public function searchInstitute($name)
    {
        return Institute::where('name', 'LIKE', '%' . $name . '%')->get();
    }

    //Institute End

    // Degree start

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/degree",
     *     tags={"Freelancer"},
     *        security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *              @OA\Property(property="password", type="string", example="abhishek"),
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function Degree()
    {
        $users = Degree::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }

    /**
     * Get Detail Profile
     * @OA\get (
     *     path="/api/searchdegree/{name}",
     *     tags={"Freelancer"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="path",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *        ),
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
    public function searchdegree($name)
    {
        return Degree::where('name', 'LIKE', '%' . $name)->get();
    }

    // Degree End

    // User_skill_details

    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/user-skill-details/add",
     *     tags={"Freelancer"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *      @OA\Parameter(
     *         in="query",
     *         name="skill_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *        ),
     *            @OA\Parameter(
     *         in="query",
     *         name="description",
     *         required=true,
     *         @OA\Schema(type="string")
     *        ),
     *     @OA\Parameter(
     *         in="query",
     *         name="year_of_experience",
     *         required=true,
     *         @OA\Schema(type="integer")
     *        ),
     *            @OA\Parameter(
     *         in="query",
     *         name="support_project",
     *         required=true,
     *         @OA\Schema(type="integer")
     *        ),
     *     @OA\Parameter(
     *         in="query",
     *         name="skill_level",
     *         required=true,
     *         @OA\Schema(type="integer")
     *        ),
     *            @OA\Parameter(
     *         in="query",
     *         name="implementation",
     *         required=true,
     *         @OA\Schema(type="integer")
     *        ),
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
    public function User_skill_details(Request $request)
    {
        DB::beginTransaction();
        try {
            $user = new UserSkillDetails;
            // $user->user_id =Auth::User()->id;
            $user->skill_id = $request->input('skill_id');
            $user->description = $request->input('description');
            $user->year_of_experience = $request->input('year_of_experience');
            $user->support_project = $request->input('support_project');
            $user->implementation = $request->input('implementation');
            $user->skill_level = $request->input('skill_level');
            $user->self_assesment = $request->input('self_assesment');
            //   dd($user);
            $user->save();

            DB::commit();
            return response()->json([
                'status' => '200 ok',
                'error' => false,
                'message' => 'User Skills data stored',
                'data' => $user,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => '200',
                'error' => true,
                'message' => $e,
            ], 201);
        }
    }
    // User_skill_details End

    // crud user skill start
    public function update(Request $request, UserSkillDetails $User)
    {
        $data = $request->only('description', 'year_of_experience', 'support_project', 'skill_level', 'implementation');
        $validator = Validator::make($data, [
            'description' => 'string',
            'year_of_experience' => 'integer',
            'support_project' => 'integer',
            'skill_level' => 'string',
            'implementation' => 'integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([

            'description' => $request->description,
            'year_of_experience' => $request->year_of_experience,
            'support_project' => $request->support_project,
            'implementation' => $request->implementation,
            'skill_level' => $request->skill_level,
        ]);
        //Product updated, return success response
        return response()->json([
            'success' => true,
            'message' => 'Skills updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserSkillDetails $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'skill deleted successfully',
        ]);
    }

    // Crud END user skills detail

    // myProject
    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/myproject/add",
     *     tags={"Freelancer"},
     *  security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="skill_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *
     *     @OA\Parameter(
     *         in="query",
     *         name="project_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="project_description",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *
     *           @OA\Parameter(
     *         in="query",
     *         name="project_duration_month",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *
     *
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function myProject(Request $request)
    {
        $user = new myProject;
        // $user->user_id = Auth::User()->id;
        $user->skill_id = $request->input('skill_id');
        $user->project_description = $request->input('project_description');
        $user->project_duration_month = $request->input('project_duration_month');
        $user->project_name = $request->input('project_name');
        $user->save();
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'Project stored',
            'data' => $user,
        ], 201);
    }
    // my project

    // CRUD PROJECT

    public function updateProject(Request $request, myProject $User)
    {
        //Validate data
        $data = $request->only('description', 'year_of_experience', 'support_project', 'skill_level', 'implementation');
        $validator = Validator::make($data, [
            'project_description' => 'integer',
            'project_duration_month' => 'integer',
            'project_name' => 'string',

        ]);


        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }

        //Request is valid, update product
        $User = $User->update([

            'project_description' => $request->project_description,
            'project_duration_month' => $request->project_duration_month,
            'project_name' => $request->project_name,

        ]);

        //Product updated, return success response
        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyProject(myProject $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'Project deleted successfully',
        ]);
    }

    // Crud END Project

    // Education start
    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/education/add",
     *     tags={"Freelancer"},
     *  security={
     *    {
     *     "passport": {}},
     *    },
     *            @OA\Parameter(
     *         in="query",
     *         name="degree_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *
     *           @OA\Parameter(
     *         in="query",
     *         name="institute_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="major",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="completion_year",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function Education(Request $request)
    {
        $user = new Education;
        // $user->user_id = Auth::User()->id;
        $user->degree_id = $request->input('degree_id');
        $user->institute_id = $request->input('institute_id');
        $user->major = $request->input('major');
        $user->completion_year = $request->input('completion_year');
        $user->save();
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'Education data Successfully stored',
            'data' => $user,
        ], 201);
    }
    // Education End

    // Crud EDucation

    public function updateEducation(Request $request, Education $User)
    {
        $data = $request->only('degree_id', 'institute_id', 'major', 'completion_year');
        $validator = Validator::make($data, [
            'degree_id' => 'integer',
            'institute_id' => 'integer',
            'major' => 'string',
            'completion_year' => 'string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([
            'degree_id' => $request->degree_id,
            'institute_id' => $request->institute_id,
            'major' => $request->major,
            'completion_year' => $request->completion_year,

        ]);
        return response()->json([
            'success' => true,
            'message' => 'Education updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyEducation(Education $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'Education deleted successfully',
        ]);
    }

    // Crud END Education

    // Experience Start

    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/experience/add",
     *     tags={"Freelancer"},
     *  security={
     *    {
     *     "passport": {}},
     *    },
     *          @OA\Parameter(
     *         in="query",
     *         name="company_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *          @OA\Parameter(
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
     *         @OA\Parameter(
     *         in="query",
     *         name="description",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="designation_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function Experience(Request $request)
    {
        $user = new Experience;
        // $user->user_id = Auth::User()->id;
        $user->company_name = $request->input('company_name');
        $user->designation_id = $request->input('designation_id');
        $user->start_date = date("Y-m-d", strtotime($request->input('start_date')));
        $user->end_date = date("Y-m-d", strtotime($request->input('end_date')));
        $user->description = $request->input('description');
        $user->status = $request->input('status');
        $user->save();
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'Experience data Successfully stored',
            'data' => $user,
        ], 201);
    }
    // Experience End

    // CRUD Experience

    public function updateExperience(Request $request, Experience $User)
    {
        $data = $request->only('company_name', 'description', 'start_date', 'end_date', 'description');
        $validator = Validator::make($data, [
            'company_name' => 'string',
            'designation_id' => 'integer',
            'start_date' => 'string',
            'end_date' => 'string',
            'description' => 'string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([
            'company_name' => $request->company_name,
            'designation_id' => $request->designation_id,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'description' => $request->description,

        ]);
        return response()->json([
            'success' => true,
            'message' => 'Experience updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Experience  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyExperience(Experience $User)
    {
        $User->delete();
        return response()->json([
            'success' => true,
            'message' => 'Experience deleted successfully',
        ]);
    }

    // Crud Experience

    // ADD REMUNERATION

    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/remuneration/add",
     *     tags={"Freelancer"},
     *  security={
     *    {
     *     "passport": {}},
     *    },
     *           @OA\Parameter(
     *         in="query",
     *         name="currency_id",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="country_id",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="hourly_rate",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="daily_rate",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="monthly_rate",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="annually_rate",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

    public function Remuneration(Request $request)
    {
        $user = new Remuneration;
        // $user->user_id = Auth::User()->id;
        $user->currency_id = $request->input('currency_id');
        $user->country_id = $request->input('country_id');
        $user->hourly_rate = $request->input('hourly_rate');
        $user->annually_rate = $request->input('annually_rate');
        $user->daily_rate = $request->input('daily_rate');
        $user->monthly_rate = $request->input('monthly_rate');
        $user->save();
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'Remuneration data Successfully stored',
            'data' => $user,
        ], 201);
    }

    // REMUNERATION End

    // crud remuration

    public function updateRemuneration(Request $request, Remuneration $User)
    {
        $data = $request->only('currency_id', 'hourly_rate', 'annually_rate', 'monthly_rate', 'daily_rate');
        $validator = Validator::make($data, [
            'currency_id' => 'string',
            'daily_rate' => 'integer',
            'annually_rate' => 'integer',
            'monthly_rate' => 'integer',
            'hourly_rate' => 'integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([
            'currency_id' => $request->currency_id,
            'daily_rate' => $request->daily_rate,
            'annually_rate' => $request->annually_rate,
            'monthly_rate' => $request->monthly_rate,
            'hourly_rate' => $request->hourly_rate,

        ]);
        return response()->json([
            'success' => true,
            'message' => 'Remuneration updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Remuneration  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyRemuneration(Remuneration $User)
    {
        $User->delete();

        return response()->json([
            'success' => true,
            'message' => 'Remuneration deleted successfully',
        ]);
    }

    // Crud rumeration

    //
    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/visa/add",
     *     tags={"Freelancer"},
     *  security={
     *    {
     *     "passport": {}},
     *    },
     *           @OA\Parameter(
     *         in="query",
     *         name="country_id",
     *         required=true,
     *         @OA\Schema(type="integer" )
     *     ),
     *
     *           @OA\Parameter(
     *         in="query",
     *         name="status",
     *
     *         required=true,
     *         @OA\Schema(type="string" )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *               @OA\Property(property="type", type="string", example=" passport,workvisa,require"),
     *         )
     *     )
     * )
     */

    public function visa(Request $request)
    {
        $user = new visa;
        // $user->user_id = Auth::User()->id;
        $user->country_id = $request->input('country_id');
        $user->status = $request->input('status');
        $user->save();

        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'Visa data Successfully stored',
            'data' => $user,
        ], 201);
    }
    // visa end

    // CRUD visa

    public function updatevisa(Request $request, visa $User)
    {
        $data = $request->only('country_id', 'status');
        $validator = Validator::make($data, [
            'country_id' => 'string',
            'status' => 'string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 200);
        }
        $User = $User->update([

            'country_id' => $request->country_id,
            'status' => $request->status,

        ]);
        return response()->json([
            'success' => true,
            'message' => 'visa updated successfully',
            'data' => $User,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\visa  $product
     * @return \Illuminate\Http\Response
     */
    public function destroyvisa(visa $User)
    {
        $User->delete();
        return response()->json([
            'success' => true,
            'message' => 'visa deleted successfully',
        ]);
    }
    // Crud visa
}
