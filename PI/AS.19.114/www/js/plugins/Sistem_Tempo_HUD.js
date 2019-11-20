//=============================================================================
// Sistema_tempo_hud.js
//=============================================================================
/*:
 * @plugindesc (v1.7) Adiciona uma HUD apresentando o tempo. 
 * @author Moghunter
 *
 * @param Initial Visible
 * @desc Ativar a Hud no inicio do jogo.
 * @default true 
 *
 * @param X-axis
 * @desc Definição da posição X-Axis da Hud.
 * @default 633
 *
 * @param Y-axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 0
 *
 * @param Fade Max
 * @desc Definição do fade maximo.
 * @default 60 
 *
 * @param Point Visible
 * @desc Ativar os ponteiros de tempo.
 * @default true
 *
 * @param Point X-axis
 * @desc Definição da posição X-Axis dos ponteiros.
 * @default 123
 *
 * @param Point Y-axis
 * @desc Definição da posição Y-Axis dos ponteiros.
 * @default 66 
 *
 * @param Timer Visible
 * @desc Ativar o timer.
 * @default false
 *
 * @param Timer X-axis
 * @desc Definição da posição X-Axis do timer.
 * @default 63
 *
 * @param Timer Y-axis
 * @desc Definição da posição Y-Axis do timer.
 * @default 66 
 *
 * @param Day Visible
 * @desc Apresentar os dias.
 * @default true
 *
 * @param Day X-axis
 * @desc Definição da posição X-Axis dos dias.
 * @default 130
 *
 * @param Day Y-axis
 * @desc Definição da posição Y-Axis dos dias.
 * @default 120 
 *
 * @param Month Visible
 * @desc Apresentar os mêses.
 * @default true
 *
 * @param Month X-axis
 * @desc Definição da posição X-Axis dos meses.
 * @default 70
 *
 * @param Month Y-axis
 * @desc Definição da posição Y-Axis dos meses.
 * @default 129
 *
 * @param Year Visible
 * @desc Apresentar os anos.
 * @default true
 *
 * @param Year X-axis
 * @desc Definição da posição X-Axis dos anos.
 * @default 20
 *
 * @param Year Y-axis
 * @desc Definição da posição Y-Axis dos anos.
 * @default 60  
 *
 * @param Day Phase Visible
 * @desc Apresentar os anos.
 * @default true
 *
 * @param Day Phase X-axis
 * @desc Definição da posição X-Axis dos anos.
 * @default 160
 *
 * @param Day Phase Y-axis
 * @desc Definição da posição Y-Axis dos anos.
 * @default -2 
 *
 * @param Season Visible
 * @desc Apresentar as estações.
 * @default true
 *
 * @param Season X-axis
 * @desc Definição da posição X-Axis das estações.
 * @default 53
 *
 * @param Season Y-axis
 * @desc Definição da posição Y-Axis das estações.
 * @default 100
 *
 * @param Day Week Visible
 * @desc Apresentar os dias da semana.
 * @default true
 *
 * @param Day Week X-axis
 * @desc Definição da posição X-Axis dos dias da semana.
 * @default 85
 *
 * @param Day Week Y-axis
 * @desc Definição da posição Y-Axis dos dias da semana.
 * @default 165
 * 
 * @help  
 * =============================================================================
 * +++ MOG Time System Hud (v1.7) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona uma HUD apresentando o tempo, addon para ser usado com MOG_TimeSystem.
 *
 * Serão necessários as imagens (/img/system/)
 * 
 * TimeHud_A.png
 * TimeHud_B.png
 * TimeHud_C.png
 * TimeHud_D.png
 * TimeHud_E.png  
 * 
 * ============================================================================
 * HISTÓRICO
 * ============================================================================
 * (v1.7) - Melhoria da codificação e na compatibilidade de plugins.  
 * (v1.6) Correção do tamanho do texto nos dias da semana.  
 * (v1.5) Compatibilidade com Chrono Engine.
 * (v1.4) Correção do glitch de piscar a hud. 
 * (v1.3) Adição de ocultar a hud no inicio do jogo.
 * (v1.2) Correção de piscar a hud no modo ocultar a hud.
 *        
 */
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Sistema_tempo_hud = true;
　　var ProjetoIntegrador = ProjetoIntegrador || {}; 

    // MAIN
ProjetoIntegrador.parameters = PluginManager.parameters('Sistema_tempo_hud');
ProjetoIntegrador.timehud_X = Number(ProjetoIntegrador.parameters['X-axis'] || 633); 
ProjetoIntegrador.timehud_Y = Number(ProjetoIntegrador.parameters['Y-axis'] || 0); 
ProjetoIntegrador.timehud_fade_limit = Number(ProjetoIntegrador.parameters['Fade Max'] || 60);
ProjetoIntegrador.timehud_point_visible = String(ProjetoIntegrador.parameters['Point Visible'] || "true");
ProjetoIntegrador.timehud_point_x = Number(ProjetoIntegrador.parameters['Point X-axis'] || 123);
ProjetoIntegrador.timehud_point_y = Number(ProjetoIntegrador.parameters['Point Y-axis'] || 66);
ProjetoIntegrador.timehud_fontSize = Number(ProjetoIntegrador.parameters['Font Size'] || 22);
ProjetoIntegrador.timehud_fontItalic = String(ProjetoIntegrador.parameters['Font Italic'] || true);
ProjetoIntegrador.timehud_day_visible = String(ProjetoIntegrador.parameters['Day Visible'] || "true");
ProjetoIntegrador.timehud_day_x = Number(ProjetoIntegrador.parameters['Day X-axis'] || 130);
ProjetoIntegrador.timehud_day_y = Number(ProjetoIntegrador.parameters['Day Y-axis'] || 120);
ProjetoIntegrador.timehud_month_visible = String(ProjetoIntegrador.parameters['Month Visible'] || "true");
ProjetoIntegrador.timehud_month_x = Number(ProjetoIntegrador.parameters['Month X-axis'] || 70);
ProjetoIntegrador.timehud_month_y = Number(ProjetoIntegrador.parameters['Month Y-axis'] || 129);
ProjetoIntegrador.timehud_year_visible = String(ProjetoIntegrador.parameters['Year Visible'] || "true");
ProjetoIntegrador.timehud_year_x = Number(ProjetoIntegrador.parameters['Year X-axis'] || 20);
ProjetoIntegrador.timehud_year_y = Number(ProjetoIntegrador.parameters['Year Y-axis'] || 60);	
ProjetoIntegrador.timehud_phase_visible = String(ProjetoIntegrador.parameters['Day Phase Visible'] || "true");
ProjetoIntegrador.timehud_phase_x = Number(ProjetoIntegrador.parameters['Day Phase X-axis'] || 160);
ProjetoIntegrador.timehud_phase_y = Number(ProjetoIntegrador.parameters['Day Phase Y-axis'] || -2);	
ProjetoIntegrador.timehud_season_visible = String(ProjetoIntegrador.parameters['Season Visible'] || "true");
ProjetoIntegrador.timehud_season_x = Number(ProjetoIntegrador.parameters['Season X-axis'] || 53);
ProjetoIntegrador.timehud_season_y = Number(ProjetoIntegrador.parameters['Season Y-axis'] || 100);
ProjetoIntegrador.timehud_dayweek_visible = String(ProjetoIntegrador.parameters['Day Week Visible'] || "true");
ProjetoIntegrador.timehud_dayweek_x = Number(ProjetoIntegrador.parameters['Day Week X-axis'] || 85);
ProjetoIntegrador.timehud_dayweek_y = Number(ProjetoIntegrador.parameters['Day Week Y-axis'] || 165);		
ProjetoIntegrador.timehud_timer_visible = String(ProjetoIntegrador.parameters['Timer Visible'] || "false");
ProjetoIntegrador.timehud_timer_x = Number(ProjetoIntegrador.parameters['Timer X-axis'] || 63);
ProjetoIntegrador.timehud_timer_y = Number(ProjetoIntegrador.parameters['Timer Y-axis'] || 66);			
ProjetoIntegrador.timehud_hudvisible = String(ProjetoIntegrador.parameters['Initial Visible'] || "true");	

if (Imported.Sistema_tempo) {
	
//==============================
// * Setup Time System
//==============================
    var Syshud_sistema_tempo = Game_System.prototype.setup_time_system;
Game_System.prototype.setup_time_system = function() {	
    Syshud_sistema_tempo.call(this);
    this._time_window_visible = String(ProjetoIntegrador.timehud_hudvisible) === "true" ? true : false;
};
	
//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
};
	
//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};	
	
//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
    var Sistema_tempo_hud_Map_createSpriteet = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
    Sistema_tempo_hud_Map_createSpriteet.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createTimeSystemHud();
	this.sortMz();
};
	
//==============================
// ** create Time System Hud
//==============================
Scene_Map.prototype.createTimeSystemHud = function() {
    this.sprite_time_engine = new SpriteTimeEngine();
	this.sprite_time_engine.mz = 120;
	this._hudField.addChild(this.sprite_time_engine);	
};	

//=============================================================================
// * Sprite Time Engine
//=============================================================================
function SpriteTimeEngine() {
    this.initialize.apply(this, arguments);
};

SpriteTimeEngine.prototype = Object.create(Sprite.prototype);
SpriteTimeEngine.prototype.constructor = SpriteTimeEngine;

//==============================
// * Initialize
//==============================
SpriteTimeEngine.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._maxMin = $gameSystem._min_max / (Math.PI * 2);
	this._maxHour = $gameSystem._hour_max / (Math.PI * 4);
	this._hud_size = [-1,-1,-1,-1];
	this.loadImages();
    this.create_sprites();
};

//==============================
// * Load Images
//==============================
SpriteTimeEngine.prototype.loadImages = function() {
    Sprite.prototype.initialize.call(this);
    this._layout_img = ImageManager.loadSystem("TimeHud_A");
	this._pont1_img = ImageManager.loadSystem("TimeHud_B");
	this._pont2_img = ImageManager.loadSystem("TimeHud_C");
    if (ProjetoIntegrador.timehud_phase_visible === "true") {this._phase_img = ImageManager.loadSystem("TimeHud_D")};
    if (ProjetoIntegrador.timehud_season_visible === "true") {this._season_img = ImageManager.loadSystem("TimeHud_E")};
};

//==============================
// * Refresh Data
//==============================
SpriteTimeEngine.prototype.refresh_data = function() {
    this._hud_size[0] = ProjetoIntegrador.timehud_X - ($gameMap.tileWidth() / 2);
    this._hud_size[1] = ProjetoIntegrador.timehud_Y - ($gameMap.tileHeight() / 2);
    this._hud_size[2] = ProjetoIntegrador.timehud_X + this._layout_img.width - $gameMap.tileWidth();
    this._hud_size[3] = ProjetoIntegrador.timehud_Y + this._layout_img.height;	 
};

//==============================
// * Create Sprites
//==============================
SpriteTimeEngine.prototype.create_sprites = function() {
    this._pos_x = ProjetoIntegrador.timehud_X;
    this._pos_y = ProjetoIntegrador.timehud_Y;
	this.create_layout();
	this.create_point();
	this.create_timer();
	this.create_day();
	this.create_month();
	this.create_year();
	this.create_dayweek();
	this.create_phase();
	this.create_season();
};

//==============================
// * Create Layout
//==============================
SpriteTimeEngine.prototype.create_layout = function() {
     this._layout = new Sprite(this._layout_img);
	 this._layout.x = this._pos_x;
	 this._layout.y = this._pos_y;
	 this.addChild(this._layout);
};

//==============================
// * Create Layout
//==============================
SpriteTimeEngine.prototype.create_point = function() {
    if (ProjetoIntegrador.timehud_point_visible !== "true") {return};
     this._point1 = new Sprite(this._pont1_img);
    this._point1.x = this._pos_x + ProjetoIntegrador.timehud_point_x;
    this._point1.y = this._pos_y + ProjetoIntegrador.timehud_point_y;
	 this._point1.anchor.x = 0.5;
	 this._point1.scale.y = -1;
	 this.addChild(this._point1);
     this._point2 = new Sprite(this._pont2_img);
	 this._point2.x = this._point1.x;
	 this._point2.y = this._point1.y;
	 this._point2.anchor.x = 0.5;
	 this._point2.scale.y = -1;
	 this.addChild(this._point2);	 
};

//==============================
// * Create Timer
//==============================
SpriteTimeEngine.prototype.create_timer = function() {
    if (ProjetoIntegrador.timehud_timer_visible !== "true") {return};
	 this._timer_old = $gameSystem.minute();
     this._timer = new Sprite(new Bitmap(120,32));
    this._timer.x = this._pos_x + ProjetoIntegrador.timehud_timer_x;
    this._timer.y = this._pos_y + ProjetoIntegrador.timehud_timer_y;
    this._timer.bitmap.fontSize = ProjetoIntegrador.timehud_fontSize;
    if (ProjetoIntegrador.timehud_fontItalic === "true") {this._timer.bitmap.fontItalic = true};
	 this.addChild(this._timer);
	 this.refresh_timer()
};

//==============================
// * Refresh Timer
//==============================
SpriteTimeEngine.prototype.refresh_timer = function() {
	this._timer_old = $gameSystem.minute();
	this._timer.bitmap.clear();
    var text = $gameSystem.hour().padZero(2) + ":" +  $gameSystem.minute().padZero(2)	 
    this._timer.bitmap.drawText(text,0,0,120,32,"center")
};

//==============================
// * Create Day
//==============================
SpriteTimeEngine.prototype.create_day = function() {
    if (ProjetoIntegrador.timehud_day_visible !== "true") {return};
	 this._day_old = $gameSystem.day();
     this._day = new Sprite(new Bitmap(60,32));
    this._day.x = this._pos_x + ProjetoIntegrador.timehud_day_x;
    this._day.y = this._pos_y + ProjetoIntegrador.timehud_day_y;
    this._day.bitmap.fontSize = ProjetoIntegrador.timehud_fontSize;
    if (ProjetoIntegrador.timehud_fontItalic === "true") {this._day.bitmap.fontItalic = true};
	 this.addChild(this._day);
	 this.refresh_day()
};

//==============================
// * Refresh Day
//==============================
SpriteTimeEngine.prototype.refresh_day = function() {
	this._day_old = $gameSystem.day();
	this._day.bitmap.clear();
	this._day.bitmap.drawText(this._day_old,0,0,60,32,"center")
};

//==============================
// * Create Month
//==============================
SpriteTimeEngine.prototype.create_month = function() {
    if (ProjetoIntegrador.timehud_month_visible !== "true") {return};
	 this._month_old = $gameSystem.month();
     this._month = new Sprite(new Bitmap(60,32));
    this._month.x = this._pos_x + ProjetoIntegrador.timehud_month_x;
    this._month.y = this._pos_y + ProjetoIntegrador.timehud_month_y;
    this._month.bitmap.fontSize = ProjetoIntegrador.timehud_fontSize;
    if (ProjetoIntegrador.timehud_fontItalic === "true") {this._month.bitmap.fontItalic = true};
	 this.addChild(this._month);
	 this.refresh_month()
};

//==============================
// * Refresh Month
//==============================
SpriteTimeEngine.prototype.refresh_month = function() {
	this._month_old = $gameSystem.month();
	this._month.bitmap.clear();
	this._month.bitmap.drawText(this._month_old,0,0,60,32,"center")
};

//==============================
// * Create Year
//==============================
SpriteTimeEngine.prototype.create_year = function() {
    if (ProjetoIntegrador.timehud_year_visible !== "true") {return};
	 this._year_old = $gameSystem.year();
     this._year = new Sprite(new Bitmap(60,32));
    this._year.x = this._pos_x + ProjetoIntegrador.timehud_year_x;
    this._year.y = this._pos_y + ProjetoIntegrador.timehud_year_y;
    this._year.bitmap.fontSize = ProjetoIntegrador.timehud_fontSize;
    if (ProjetoIntegrador.timehud_fontItalic === "true") {this._year.bitmap.fontItalic = true};
	 this.addChild(this._year);
	 this.refresh_year()
};

//==============================
// * Refresh Year
//==============================
SpriteTimeEngine.prototype.refresh_year = function() {
	this._year_old = $gameSystem.year();
	this._year.bitmap.clear();
	this._year.bitmap.drawText(this._year_old,0,0,60,32,"center")
};

//==============================
// * Create Phase
//==============================
SpriteTimeEngine.prototype.create_phase = function() {
    if (ProjetoIntegrador.timehud_phase_visible !== "true") {return};
     this._phase = new Sprite(this._phase_img);
	 this.addChild(this._phase);
    this._phase.x = this._pos_x + ProjetoIntegrador.timehud_phase_x;
    this._phase.y = this._pos_y + ProjetoIntegrador.timehud_phase_y;
	 this._phase.visible = false;
	 this._phase_data = [-1,-1,-1]
};

//==============================
// * Get Phase Data
//==============================
SpriteTimeEngine.prototype.getPhaseData = function() {
     this._phase_data[0] = this._phase_img.width / 6;
	 this._phase_data[1] = this._phase_img.height;	 
};

//==============================
// * Refresh Phase
//==============================
SpriteTimeEngine.prototype.refresh_phase = function() {
    this._phase_data[2] = $gameSystem.day_phase()
	this._phase.visible = true;
	this._phase.setFrame(this._phase_data[0] * this._phase_data[2],0,this._phase_data[0],this._phase_data[1]);
	this._phase.opacity = 0;
};

//==============================
// * Create Season
//==============================
SpriteTimeEngine.prototype.create_season = function() {
    if (ProjetoIntegrador.timehud_season_visible !== "true") {return};
     this._season = new Sprite(this._season_img);
	 this.addChild(this._season);
    this._season.x = this._pos_x + ProjetoIntegrador.timehud_season_x;
    this._season.y = this._pos_y + ProjetoIntegrador.timehud_season_y;
	 this._season.visible = false;
	 this._season_data = [-1,-1,-1]
};

//==============================
// * Get Season Data
//==============================
SpriteTimeEngine.prototype.getSeasonData = function() {
     this._season_data[0] = this._season_img.width / $gameSystem._season_max;
	 this._season_data[1] = this._season_img.height;	 
};

//==============================
// * Refresh Season
//==============================
SpriteTimeEngine.prototype.refresh_season = function() {
    this._season_data[2] = $gameSystem.season()
	this._season.visible = true;
	this._season.setFrame(this._season_data[0] * (this._season_data[2] - 1),0,this._season_data[0],this._season_data[1]);
	this._season.opacity = 0;
};

//==============================
// * Create DayWeek
//==============================
SpriteTimeEngine.prototype.create_dayweek = function() {
    if (ProjetoIntegrador.timehud_dayweek_visible !== "true") {return};
	 this._dayweek_old = $gameSystem.day_week();
     this._dayweek = new Sprite(new Bitmap(90,32));
    this._dayweek.x = this._pos_x + ProjetoIntegrador.timehud_dayweek_x;
    this._dayweek.y = this._pos_y + ProjetoIntegrador.timehud_dayweek_y;
    this._dayweek.bitmap.fontSize = ProjetoIntegrador.timehud_fontSize;
    if (ProjetoIntegrador.timehud_fontItalic === "true") {this._dayweek.bitmap.fontItalic = true};
	 this.addChild(this._dayweek);
	 this.refresh_dayweek()
};

//==============================
// * Refresh DayWeek
//==============================
SpriteTimeEngine.prototype.refresh_dayweek = function() {
	this._dayweek_old = $gameSystem.day_week();
	this._dayweek.bitmap.clear();
	this._dayweek.bitmap.drawText($gameSystem.day_week_name(),0,0,90,32,"center")
};

//==============================
// * Min
//==============================
SpriteTimeEngine.prototype.min = function() {
    return $gameSystem.minute() / this._maxMin;
};

//==============================
// * hour
//==============================
SpriteTimeEngine.prototype.hour = function() {
    return $gameSystem.hour() / this._maxHour;
};

//==============================
// * Update
//==============================
SpriteTimeEngine.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this._hud_size[0] === -1 && this._layout_img.isReady()) {this.refresh_data()};
	if (this._hud_size[0] === -1) {return};
	this.update_visible();
    if (this._point1) {this.update_point()};
	if (this._timer) {this.update_timer()};	
	if (this._day) {this.update_day()};
	if (this._dayweek) {this.update_dayweek()};
	if (this._month) {this.update_month()};
	if (this._year) {this.update_year()};
	if (this._phase) {this.update_phase()};
	if (this._season) {this.update_season()};	
};

//==============================
// * Update visible
//==============================
SpriteTimeEngine.prototype.update_visible = function() {
    if (Imported.ChronoEngine && $gameSystem.isChronoMode()) {
		this.opacity -= 20;
		return;
	};	
	this.visible = $gameSystem._time_window_visible;
	if (this.is_hud_visible()) {this.opacity += 10}	 
	else {
		if ($gameMessage.isBusy()) {
		        this.opacity -= 10;
		} else {		
            if (this.opacity > ProjetoIntegrador.timehud_fade_limit) {	
				this.opacity -= 10;
                if (this.opacity < ProjetoIntegrador.timehud_fade_limit) { this.opacity = ProjetoIntegrador.timehud_fade_limit};
			};
		};
	};
};

//==============================
// * Is Hud Visible
//==============================
SpriteTimeEngine.prototype.is_hud_visible = function() {
	if ($gameMessage.isBusy()) {return false};
	if (!$gameSystem._time_window_visible) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return true};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return true};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return true};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return true};
    if (this.opacity < ProjetoIntegrador.timehud_fade_limit) {return true};
	return false;
};

//==============================
// * Update Point
//==============================
SpriteTimeEngine.prototype.update_point = function() {
	this._point1.rotation = this.min();
	this._point2.rotation = this.hour();
};

//==============================
// * Update Day
//==============================
SpriteTimeEngine.prototype.update_day = function() {
    if (this._day_old != $gameSystem.day()) {this.refresh_day()};
};

//==============================
// * Update Timer
//==============================
SpriteTimeEngine.prototype.update_timer = function() {
    if (this._timer_old != $gameSystem.minute()) {this.refresh_timer()};
};

//==============================
// * Update DayWeek
//==============================
SpriteTimeEngine.prototype.update_dayweek = function() {
    if (this._dayweek_old != $gameSystem.day_week()) {this.refresh_dayweek()};
};

//==============================
// * Update Month
//==============================
SpriteTimeEngine.prototype.update_month = function() {
    if (this._month_old != $gameSystem.month()) {this.refresh_month()};
};

//==============================
// * Update Year
//==============================
SpriteTimeEngine.prototype.update_year = function() {
    if (this._year_old != $gameSystem.year()) {this.refresh_year()};
};

//==============================
// * Update Phase
//==============================
SpriteTimeEngine.prototype.update_phase = function() {
    if (this._phase_data[0] === -1 && this._phase_img.isReady()) {this.getPhaseData()};
	if (this._phase_data[0] === -1) {return};
	if (this._phaase_data[2] != $gameSystem.day_phase()) {this.refresh_phase()};
	this._phase.opacity += 10;
};

//==============================
// * Update Season
//==============================
SpriteTimeEngine.prototype.update_season = function() {
    if (this._season_data[0] === -1 && this._season_img.isReady()) {this.getSeasonData()};
	if (this._season_data[0] === -1) {return};
	if (this._season_data[2] != $gameSystem.season()) {this.refresh_season()};
	this._season.opacity += 10;
};

//==============================
// * create Time Status
//==============================
Scene_Map.prototype.createTimeStatus = function() {
};


};