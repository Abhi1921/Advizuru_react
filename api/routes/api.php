<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CountryStateCity;
use App\Http\Controllers\Freelancer\FreelancerController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Organisation\OrganisationController;
use App\Http\Controllers\RateCard\RateCardController;
use App\Http\Controllers\TicketModule\TicketController;
use App\Http\Controllers\Training\TrainingController;
use App\Http\Controllers\RaiseTicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('organisation/register', 'registerOrganisation');
    Route::post('freelancer/register', 'registerFreelancer');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('userprofile', 'profile');
    Route::post('contact_us', 'contact_us');
    Route::post('reset', 'reset');
    Route::post('resetPassword', 'resetPassword');

});
Route::post('sendemail', [ForgotPasswordController::class,'getResetToken']);
Route::post('password/reset',[ResetPasswordController::class,'reset']);
Route::controller(OrganisationController::class)->group(function () {
    // register api organisation
    Route::get('designation', 'index');
    Route::get('fetchdesignation/{name}', 'fetchdesignation');
    Route::get('industry', 'industry');
    Route::get('services', 'Services');
    Route::get('serviceType', 'ServiceType');

});

Route::controller(FreelancerController::class)->group(function () {
    // freelancer home section
    Route::get('selectprofile', 'SelectProfile');
    Route::post('UserSkill', 'UserSkill');
    // skills api
    Route::get('all-skills', 'allSkills');
    Route::get('searchskills/{name}', 'searchskills');
    // degree api
    Route::get('degree', 'Degree');
    Route::get('searchdegree/{name}', 'searchdegree');
    // institute api
    Route::get('institute', 'Institute');
    Route::get('searchinstitute/{name}', 'searchInstitute');
    // crud user skills
    Route::post('user-skill-details/add', 'User_skill_details');
    Route::put('user-skill-details/update/{User}', 'update');
    Route::delete('user-skill-details/delete/{User}', 'destroy');
    // crud myproject
    Route::post('myproject/add', 'myproject');
    Route::put('myproject/update/{User}', 'updateProject');
    Route::delete('myproject/delete/{User}', 'destroyProject');
    // crud education
    Route::post('education/add', 'Education');
    Route::put('education/update/{User}', 'updateEducation');
    Route::delete('education/delete/{User}', 'destroyEducation');
    // crud Experience
    Route::post('experience/add', 'Experience');
    Route::put('experience/update/{User}', 'updateExperience');
    Route::delete('experience/delete/{User}', 'destroyExperience');
    // crud others
    Route::post('remuneration/add', 'Remuneration');
    Route::put('remuneration/update/{User}', 'updateRemuneration');
    Route::delete('remuneration/delete/{User}', 'destroyremuneration');
// crud visa
    Route::post('visa/add', 'visa');
    Route::put('visa/update/{User}', 'updatevisa');
    Route::delete('visa/delete/{User}', 'destroyvisa');
    Route::get('list', 'list');


});

Route::controller(TicketController::class)->group(function () {
    // addRecruitment 
    // crud
    Route::post('add/recruitment', 'addRecruitment');
    Route::put('update/recruitment/{User}','updateRecruitment');
    Route::delete('recruitment/delete/{User}',  'destroyRecruitment');
    // end
    
    Route::post('add/bussiness-lead','bussinesslead')->name('bus');
    Route::post('add/service','addService');
    Route::post('add/sub-contract','addSubContract');
    
    


});

Route::controller(TrainingController::class)->group(function () {
    Route::post('add/training-profile', 'addTrainingProfile');
    Route::post('add/training-programing', 'addTrainerProgram');


});

Route::controller(RaiseTicketController::class)->group(function () {
    Route::post('add/raiseticket', 'addRaiseTicket');
  


});
Route::controller(RateCardController::class)->group(function () {
    Route::post('add/rate-card','addRateCard');
    Route::put('update/rate-card/{User}','updateRateCard');
    Route::delete('delete/rate-card/{User}','destroyrateCard');


// my project description

Route::post('add/project-description','MyProjectDescription');
Route::put('update/project-description/{User}','updateProjectDescription');
Route::delete('delete-project-description/{User}','destroyorg');


});


Route::controller(CountryStateCity::class)->group(function () {
    Route::get('country', 'index');
    Route::post('state', 'getState');
    Route::post('city', 'getCity');
    Route::get('allcity/{city_name}', 'getallcity');
    route::get('currency','getCurrency');
     
  
}); 

// constants

Route::get('get-Implementations', function () {
    return (config('freelancer.Implementations'));
});
Route::get('get-Skill_Level', function () {
    return (config('freelancer.Skill_Level'));
});

Route::get('get-Year_Of_Experience', function () {
    return (config('freelancer.Year_Of_Experience'));
});

Route::get('get-Support_Project', function () {
    return (config('freelancer.Support_Project'));
});
route::get('get-completion_year', function () {
    return (config('freelancer.completion_year'));
});
route::get('get-full_time', function () {
    return (config('freelancer.full_time'));
});
route::get('get-part_time', function () {
    return (config('freelancer.part_time'));
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});

// Route::group(['middleware' => 'auth.jwt'], function () {
//     Route::get('logout', 'ApiController@logout');

// });
