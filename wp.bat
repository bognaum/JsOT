SET    _n_m_=.\node_modules
@SET     path=%_n_m_%\.bin;%path%

SET _watcher=nodemon
SET  _w_opts=--watch webpack.config.js
SET _started="%_n_m_%\webpack\bin\webpack.js"

WHERE %_watcher%
@ECHO ^        %%~dp0 : %~dp0
@ECHO ^           %%* : %*
@ECHO -------------------------------------------

%_watcher% %_w_opts% --  %_started% %*