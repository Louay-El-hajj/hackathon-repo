<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApiData extends Model
{
    use HasFactory;
    protected $fillable = [
        'location_id', 'source', 'data_type', 'timestamp', 'prediction'
    ];

    protected $casts = [
        'prediction' => 'array',
    ];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

}
