<?php

namespace App\Http\Controllers;

use App\Models\Building;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $buildings = Building::all();
        return Inertia::render('Home/Index',[
            'buildings' => $buildings
        ]);
    }
}
