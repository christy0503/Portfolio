<?php

namespace App\Http\Requests\Image;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'image'=> 'required|image|mimes:jped,png,jpg,gif|max:2048'
        ];
    }
    public function image(){
        return $title->file('image');
    }
}
