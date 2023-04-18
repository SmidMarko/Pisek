<?php

Route::post('/acs', 'Auth\ArnesAAIController@acs');
Route::get('/sls', 'Auth\ArnesAAIController@sls');
Route::get('/idp_ds_return', 'Auth\ArnesAAIController@idp_ds_return');