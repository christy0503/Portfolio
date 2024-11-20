<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    //
    use Hasfactory;
    protected $fillable = [
    'title',
    'contents',
];
}
