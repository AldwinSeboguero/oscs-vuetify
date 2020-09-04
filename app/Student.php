<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $guarded = [];
    protected $table='students';
    protected $fillable=['student_number','slug','name','year','section_id','program_id','initial_password'];
	
    public function section()
    {
        return $this->belongsTo('App\Section','section_id'); 
    }
    public function program()
    {
        return $this->belongsTo('App\Program','program_id'); 
    }
    public function campus()
    {
        return $this->belongsTo('App\Campus','campus_id'); 
    }
    
}
