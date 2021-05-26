
	document.body.addEventListener('touchmove', function (e) {
                e.preventDefault()
            }, { passive: false });
    
var nes;
	    $(function() {
	        nes = new JSNES({
	            'ui': $('#emulator').JSNESUI({
			    "广告位": [
						
					],
	                "经典": [
	                    ['纽约大拳猫', file + 'roms/rom2/RockinCats.nes'],
	                    ['赤影战士 Kage', file + 'roms/other/Kage.nes'],
	                    ['中国象棋', file + 'roms/other/Zhong Guo Xiang Qi.nes'],
	                    ['吃豆精灵 (J) (V1.1) Pac-Man [!]', file + 'roms/other/Pac-Man.nes'],
	                    ['沙罗曼蛇 (U) Life Force', file + 'roms/rom2/Life Force [!].nes'],
	                    ['1943 (U) 1943 - The Battle of Midway', file + 'roms/rom2/1943.nes'],
	                    ['脱狱 Cross Fire (J)', file + 'roms/rom2/Cross Fire (J).nes'],
	                    ['撞球咖啡馆 Shufflepuck Cafe', file + 'roms/rom2/Shufflepuck Cafe.nes'],
	                    ['功夫 (J) (V1.2) Yie Ar Kung-Fu [!]', file + 'roms/rom1/(J) (V1.2) Yie Ar Kung-Fu [!].nes'],
	                ],
	                "魂斗罗": [
	                    ['魂斗罗1(U)30', file + 'roms/Contra/Contra1(U)30.nes'],
	                    ['魂斗罗1(U)30F', file + 'roms/Contra/Contra1(U)30F.nes'],
	                    ['魂斗罗1(U)30L', file + 'roms/Contra/Contra1(U)30L.nes'],
	                    ['魂斗罗1(U)30M', file + 'roms/Contra/Contra1(U)30M.nes'],
	                    ['魂斗罗1(U)30S', file + 'roms/Contra/Contra1(U)30S.nes'],
	                    ['魂斗罗1(U)F', file + 'roms/Contra/Contra1(U)F.nes'],
	                    ['魂斗罗1(U)L', file + 'roms/Contra/Contra1(U)L.nes'],
	                    ['魂斗罗1(U)M', file + 'roms/Contra/Contra1(U)M.nes'],
	                    ['魂斗罗1(U)S', file + 'roms/Contra/Contra1(U)S.nes'],
	                ],
	                "坦克": [
	                    ['坦克 (Ch) Missile Tank', file + 'roms/rom1/(Ch) Missile Tank.nes'],
	                    ['坦克 (Ch) Tank 1990', file + 'roms/rom1/(Ch) Tank 1990.nes'],
	                    ['坦克 (J) Battle City', file + 'roms/rom1/(J) Battle City.nes'],
	                ],
	                "超级玛丽": [
	                    ['超级马里奥1 (W) Super Mario Bros. [!]', file + 'roms/rom1/(W) Super Mario Bros. [!].nes'],
	                    ['超级马里奥2 (W) Super Mario Bros. 3 (U)', file + 'roms/bfirsh/Super Mario Bros. 3 (U) (PRG1) [!].nes'],
	                    ['马里奥拆屋工 (W) Wrecking Crew [!]', file + 'roms/rom1/(W) Wrecking Crew [!].nes'],
	                    ['马里奥医生 Dr. Mario (JU)', file + 'roms/bfirsh/Dr. Mario (JU).nes'],
	                ],
	                "双截龙": [
	                    ['双截龙1 Double Dragon1', file + 'roms/Double Dragon/Double Dragon1.nes'],
	                    ['双截龙2 Double Dragon2', file + 'roms/Double Dragon/Double Dragon2.nes'],
	                    ['双截龙3 Double Dragon3', file + 'roms/Double Dragon/Double Dragon3.nes'],
	                    ['双截龙4 Double Dragon4', file + 'roms/Double Dragon/Double Dragon4.nes'],
	                ],
	                "淘金者": [
	                    ['淘金者(汉化)', file + 'roms/rom1/TaoJinZhe.nes'],
	                    ['淘金者(J)', file + 'roms/rom1/Championship Lode Runner (J).nes'],
	                ],
	                "俄罗斯方块": [
	                    ['俄罗斯方块LJ65', file + 'roms/lj65/lj65.nes'],
	                    ['俄罗斯方块Tetris(U)', file + 'roms/other/Tetris (U) [!].nes'],
	                    ['俄罗斯方块Tetris 2(U)', file + 'roms/other/Tetris 2 (U) [!].nes'],
	                ],
	                "赛车": [
	                    ['F1赛车 (J) F-1 Race [!]', file + 'roms/rom1/(J) F-1 Race [!].nes'],
	                    ['摩托车大赛 (JU) (PRG0) Mach Rider [!]', file + 'roms/rom1/(JU) (PRG0) Mach Rider [!].nes'],
	                    ['越野机车 (JU) Excitebike [!]', file + 'roms/rom1/(JU) Excitebike [!].nes'],
	                    ['火箭车 (J) Road Fighter [!]', file + 'roms/rom1/(J) Road Fighter [!].nes'],
	                ],
	                "1981": [
	                    ['五子棋 (5) 日版', file + 'roms/1981/5.nes'],
	                ],
	                "其它": [
	                    ['泡泡 Bubble Bobble (U)', file + 'roms/bfirsh/Bubble Bobble (U).nes'],
	                    ['Concentration Room', file + 'roms/croom/croom.nes'],
	                    ['网球Tennis(JU)', file + 'roms/other/Tennis (JU) [!].nes'],
	                    ['高尔夫 Golf (JU)', file + 'roms/bfirsh/Golf (JU).nes'],
	                    ['Zelda II - The Adventure of Link(U)', file + 'roms/other/Zelda II - The Adventure of Link (U).nes'],
	                    ['地底探险1 (J) Spelunker [!]', file + 'roms/rom1/(J) Spelunker [!].nes'],
	                    ['快乐猫 (J) Mappy [!]', file + 'roms/rom1/(J) Mappy [!].nes'],
	                    ['成龙踢馆1 (J) Spartan X [!]', file + 'roms/rom1/(J) Spartan X [!].nes'],
	                    ['敲冰块 (J) Ice Climber', file + 'roms/rom1/(J) Ice Climber.nes'],
	                    ['炸弹人1 (J) Bomberman [!]', file + 'roms/rom1/(J) Bomberman [!].nes'],
	                    ['猪小弟 (J) Pooyan', file + 'roms/rom1/(J) Pooyan.nes'],
	                    ['马戏团 (J) Circus Charlie [!]', file + 'roms/rom1/(J) Circus Charlie [!].nes'],
	                ],
	                // "不可用": [
	                //     ['Concentration Room', 'roms/croom/croom.nes'],
	                //     ['LJ65', 'roms/lj65/lj65.nes'],
	                //     ['赤色要塞 (KC) Jackal', 'roms/other/Jackal.nes'],
	                //     ['花式撞球 (U) Side Pocket', 'roms/rom2/Side Pocket.nes'],
	                //     ['彩虹岛 (U) Rainbow Islands', 'roms/rom2/Rainbow Islands.nes'],
	                //     ['快打旋风 (U) Mighty Final Fight', 'roms/rom2/Mighty Final Fight.nes'],
	
	                //     ['七宝奇谋1 (J) Goonies, The [!]', 'roms/rom1/(J) Goonies, The [!].nes'],
	                //     ['俄罗斯方块 (Tengen) Tetris [!]', 'roms/rom1/(Tengen) Tetris [!].nes'],
	                //     ['兵蜂1 (J) TwinBee [!]', 'roms/rom1/(J) TwinBee [!].nes'],
	                //     ['冒险岛1 (J) Takahashi Meijin no Bouken Shima [!]', 'roms/rom1/(J) Takahashi Meijin no Bouken Shima [!].nes'],
	                //     ['南极大冒险 (J) Antarctic Adventure [!]', 'roms/rom1/(J) Antarctic Adventure [!].nes'],
	                //     ['叮当1 (J) Dig Dug [!]', 'roms/rom1/(J) Dig Dug [!].nes'],
	
	                //     ['影之传说 (J) Kage no Densetsu [!]', 'roms/rom1/(J) Kage no Densetsu [!].nes'],
	                //     ['打砖块1 (J) Arkanoid [!]', 'roms/rom1/(J) Arkanoid [!].nes'],
	                //     ],
	                "忍者龙剑传": [
	                    ['忍者龙剑传1 (PC10) Ninja Gaiden', file + 'roms/Ninja_Gaiden/Ninja_Gaiden1.nes'],
	                    ['忍者龙剑传2 (PC10) Ninja Gaiden II - The Dark Sword of Chaos', file + 'roms/Ninja_Gaiden/Ninja_Gaiden2.nes'],
	                    ['忍者龙剑传3 (PC10) Ninja Gaiden III - The Ancient Ship of Doom', file + 'roms/Ninja_Gaiden/Ninja_Gaiden3.nes'],
	                    ['小蜜蜂 (J) Galaxian [!]', file + 'roms/rom1/(J) Galaxian [!].nes'],
	                    ['AV麻雀俱乐部 (Hacker) AV Mahjongg', file + 'roms/rom1/(Hacker) AV Mahjongg.nes'],
	                ]
	            })
	        });
	    });
