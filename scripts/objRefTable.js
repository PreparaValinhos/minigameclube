const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Behaviors.Flash,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Mouse.Acts.SetCursor2,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.IsButtonDown,
		C3.Plugins.Mouse.Cnds.OnRelease,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.Flash.Acts.Flash
	];
};
self.C3_JsPropNameTable = [
	{phoneCropped: 0},
	{Mouse: 0},
	{Cursor: 0},
	{ArrastarSoltar: 0},
	{burger: 0},
	{gpu: 0},
	{monticelular: 0},
	{Botão: 0},
	{checa: 0},
	{Errou: 0},
	{Certou: 0},
	{cpu: 0},
	{Sprite: 0},
	{flashcard: 0},
	{kitten: 0},
	{Piscar: 0},
	{aviso: 0},
	{Áudio: 0}
];

self.InstanceType = {
	phoneCropped: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Cursor: class extends self.ISpriteInstance {},
	burger: class extends self.ISpriteInstance {},
	gpu: class extends self.ISpriteInstance {},
	monticelular: class extends self.ITextInstance {},
	Botão: class extends self.IButtonInstance {},
	checa: class extends self.ITextInstance {},
	Errou: class extends self.ISpriteInstance {},
	Certou: class extends self.ISpriteInstance {},
	cpu: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	flashcard: class extends self.ISpriteInstance {},
	kitten: class extends self.ISpriteInstance {},
	aviso: class extends self.ITextInstance {},
	Áudio: class extends self.IInstance {}
}