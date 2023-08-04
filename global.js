const icon_by_name = {
    "clear": "00_clear",
    "NONE": "63_none",
    "None": "63_none",
    "randomitems": "60_randomitems_inactive",
    //## Shortcuts
    "DeadEnd": "Shortcut_Dead_End_icon",
    "Normal": "Shortcut_Normal_icon",
    "RoomExit": "Shortcut_Room_Exit_icon",
    "CreatureHole": "Shortcut_Creature_Hole_icon",
    "NPCTransportation": "Shortcut_NPC_Transportation_icon",
    "RegionTransportation": "Shortcut_Region_Transportation_icon",
    "garbagehole": "Garbage_Worm_icon",
    "Garbage Worm": "Garbage_Worm_icon",
    "wormgrass": "Worm_Grass_icon",
    "Worm Grass": "Worm_Grass_icon",
    "waterfall": "Waterfall_icon",
    "hivetile": "Batfly_Hive_icon",
    "batfly": "Batfly_icon",
    //## Slugcats
    "SlugNPC": "Slugpup_icon",
    "slugcat": "Slugcat_icon",
    "white": "Survivor_icon",
    "red": "Hunter_icon",
    "yellow": "Monk_icon",
    "gourmand": "Gourmand_icon",
    "artificer": "Artificer_icon",
    "rivulet": "Rivulet_icon",
    "spear": "Spearmaster_icon",
    "saint": "Saint_icon",
    "inv": "Sofanthiel_icon",
    //## Creatures
    "Green": "Green_Lizard_icon",
    "Pink": "Pink_Lizard_icon",
    "Blue": "Blue_Lizard_icon",
    "White": "White_Lizard_icon",
    "Black": "Black_Lizard_icon",
    "Yellow": "Yellow_Lizard_icon",
    "Cyan": "Cyan_Lizard_icon",
    "Red": "Red_Lizard_icon",
    "Salamander": "Salamander_icon",
    "CicadaA": "White_Squidcada_icon",
    "CicadaB": "Black_Squidcada_icon",
    "Snail": "Snail_icon",
    "Leech": "Red_Leech_icon",
    "Sea Leech": "Blue_Leech_icon",
    "SeaLeech": "Blue_Leech_icon",
    "Mimic": "Pole_Plant_icon",
    "PoleMimic": "Pole_Plant_icon",
    "Pole Mimic": "Pole_Plant_icon",
    "TentaclePlant": "Monster_Kelp_icon",
    "Tentacle Plant": "Monster_Kelp_icon",
    "Tentacle": "Monster_Kelp_icon",
    "Scavenger": "Scavenger_icon",
    "Vulture": "Vulture_icon",
    "KingVulture": "King_Vulture_icon",
    "King Vulture": "King_Vulture_icon",
    "Small Centipede": "Infant_Centipede_icon",
    "SmallCentipede": "Infant_Centipede_icon",
    "Centipede Small": "Infant_Centipede_icon",
    "InfantCentipedeAlternateForm": "Infant_Centipede_AlternateForm_icon",
    "Centipede": "Adult_Centipede_icon",
    "Big Centipede": "Overgrown_Centipede_icon",
    "Red Centipede": "Red_Centipede_icon",
    "RedCentipede": "Red_Centipede_icon",
    "Centiwing": "Centiwing_icon",
    "grappleworm": "Grapple_Worm_icon",
    "Tube": "Grapple_Worm_icon",
    "TubeWorm": "Grapple_Worm_icon",
    "Tube Worm": "Grapple_Worm_icon",
    "Lantern Mouse": "Lantern_Mouse_icon",
    "Mouse": "Lantern_Mouse_icon",
    "Spider": "Coalescipede_icon",
    "BigSpider": "Big_Spider_icon",
    "Big Spider": "Big_Spider_icon",
    "Bigspider": "Big_Spider_icon",
    "SpitterSpider": "Spitter_Spider_icon",
    "Miros Bird": "Miros_Bird_icon",
    "Miros": "Miros_Bird_icon",
    "Bro": "Brother_Long_Legs_icon",
    "Daddy": "Daddy_Long_Legs_icon",
    "Deer": "Rain_Deer_icon",
    "EggBug": "Eggbug_icon",
    "Eggbug": "Eggbug_icon",
    "Egg Bug": "Eggbug_icon",
    "DropBug": "Dropwig_icon",
    "Dropbug": "Dropwig_icon",
    "DropWig": "Dropwig_icon",
    "Dropwig": "Dropwig_icon",
    "Drop Bug": "Dropwig_icon",
    "BigNeedleWorm": "Adult_Noodlefly_icon",
    "BigNeedle": "Adult_Noodlefly_icon",
    "Needle": "Adult_Noodlefly_icon",
    "SmallNeedleWorm": "Infant_Noodlefly_icon",
    "SmallNeedle": "Infant_Noodlefly_icon",
    "Jet Fish": "Jetfish_icon",
    "JetFish": "Jetfish_icon",
    "Jetfish": "Jetfish_icon",
    "Leviathan": "Leviathan_icon",
    "Overseer": "Overseer_icon",
    //##MSC
    "Caramel": "Caramel_Lizard_icon",
    "SpitLizard": "Caramel_Lizard_icon",
    "Strawberry": "Strawberry_Lizard_icon",
    "ZoopLizard": "Strawberry_Lizard_icon",
    "Eel": "Eel_Lizard_icon",
    "EelLizard": "Eel_Lizard_icon",
    "Terror": "Mother_Long_Legs_icon",
    "TerrorLongLegs": "Mother_Long_Legs_icon",
    "MotherSpider": "Mother_Spider_icon",
    "Mother Spider": "Mother_Spider_icon",
    "MirosVulture": "Miros_Vulture_icon",
    "Miros Vulture": "Miros_Vulture_icon",
    "Hellbug": "Firebug_icon",
    "HellBug": "Firebug_icon",
    "Firebug": "Firebug_icon",
    "FireBug": "Firebug_icon",
    "ScavengerElite": "Elite_Scavenger_icon",
    "Scavenger Elite": "Elite_Scavenger_icon",
    "EliteScavenger": "Elite_Scavenger_icon",
    "Elite Scavenger": "Elite_Scavenger_icon",
    "Elite": "Elite_Scavenger_icon",
    "Inspector": "Inspector_icon",
    "Yeek": "Yeek_icon",
    "AquaCentipede": "Aquapede_icon",
    "Aquacenti": "Aquapede_icon",
    "AquaCenti": "Aquapede_icon",
    "Aquapede": "Aquapede_icon",
    "JungleLeech": "Jungle_Leech_icon",
    "Jungle Leech": "Jungle_Leech_icon",
    "Train": "Train_Lizard_icon",
    "TrainLizard": "Train_Lizard_icon",
    "HunterDaddy": "Hunter_Long_Legs_icon",
    "ScavengerKing": "Chieftain_Scavenger_icon",
    //## Creature Attributes
    "precycle": "PreCycle_icon",
    "Night": "Night_icon",
    "ignorecycle": "IgnoreCycle_icon",
    "tentacleimmune": "TentacleImmune_icon",
    "alternateform": "AlternateForm_icon",
    "lavasafe": "LavaSafe_icon",
    "voidsea": "VoidSea_icon",
    "winter": "Winter_icon",
    //##Placed Objects
    //## Placed Creatures
    "JellyFish": "Jellyfish_icon",
    "jellyfish": "Jellyfish_icon",
    "BigJellyFish": "Giant_Jellyfish_icon",
    "BigJelly": "Giant_Jellyfish_icon",
    "Stowaway": "Stowaway_icon",
    "TempleGuard": "Guardian_icon",
    "HRGuard": "HR_Guard_icon",
    "VultureGrub": "Vulture_Grub_icon",
    "vulturegrub": "Vulture_Grub_icon",
    "DeadVultureGrub": "Dead_Vulture_Grub_icon",
    "Hazer": "Hazer_icon",
    "hazer": "Hazer_icon",
    "DeadHazer": "Dead_Hazer_icon",
    //## Edible
    "DandelionPeach": "Dandelion_Peach_icon",
    "GooieDuck": "Gooieduck_icon",
    "LillyPuck": "Lilypuck_icon",
    "GlowWeed": "Glow_Weed_icon",
    "DangleFruit": "Blue_Fruit_icon",
    "bluefruit": "Blue_Fruit_icon",
    "KarmaFlower": "Karma_Flower_icon",
    "Mushroom": "Mushroom_icon",
    "mushroom": "Mushroom_icon",
    "SlimeMold": "Slime_Mold_icon",
    "slimemold": "Slime_Mold_icon",
    "SeedCob": "Colored_Popcorn_Plant_icon",
    "WaterNut": "Bubble_Fruit_icon",
    "waternut": "Bubble_Fruit_icon",
    "NeedleEgg": "Noodlefly_Egg_icon",
    //## Non-Edible
    "BubbleGrass": "Bubble_Weed_icon",
    "bubbleweed": "Bubble_Weed_icon",
    "SporePlant": "Beehive_icon",
    "hive": "Beehive_icon",
    "FlyLure": "Batnip_icon",
    "lure": "Batnip_icon",
    "FirecrackerPlant": "Cherrybomb_icon",
    "firecrackerplant": "Cherrybomb_icon",
    "FlareBomb": "Flashbang_icon",
    "flashbang": "Flashbang_icon",
    "PuffBall": "Spore_Puff_icon",
    "puffball": "10_puffball",
    "Lantern": "Lantern_icon",
    "lantern": "Lantern_icon",
    "DataPearl": "Pearl_misc_icon",
    "UniqueDataPearl": "Pearl_misc_icon",
    "rock": "Rubbish_icon",
    "bomb": "Grenade_icon",
    "ReliableSpear": "Spear_icon",
    "spear": "Spear_icon",
    "boomstick": "Explosive_Spear_icon",
    //## Superstructure
    "CoralStem": "Coral_Stem_icon",
    "CoralStemWithNeurons": "Coral_Stem_With_Neurons_icon",
    "CoralNeuron": "Coral_Neuron_icon",
    "CoralCircuit": "Coral_Circuit_icon",
    "ProjectedStars": "Projected_Stars_icon",
    "ZapCoil": "Zap_Coil_icon",
    "GravityDisruptor": "Gravity_Disruptor_icon",
    "DeepProcessing": "Deep_Processing_icon",
    "NeuronSpawner": "Neuron_Fly_icon",
    "EnergySwirl": "Energy_Swirl_icon",
    "LightningMachine": "Lightning_Machine_icon",
    //## Corruption
    "Corruption": "Corruption_icon",
    "CorruptionTube": "Corruption_Tube_icon",
    "StuckDaddy": "Stuck_Daddy_icon",
    "RotFlyPaper": "Rot_Fly_Paper_icon",
    //## Other
    "CentipedeAttractor": "Centipede_Attractor_icon",
    "DandelionPatch": "SkyDandelion",
    "GhostSpot": "Echo_icon",
    "VoidSpawnEgg": "Void_Spawn_Egg_icon",
    "SuperJumpInstruction": "Super_Jump_Instruction_icon",
    "ProjectedImagePosition": "Projected_Image_Position_icon",
    "NoSpearStickZone": "No_Spear_Stick_Zone_icon",
    "LanternOnStick": "Lantern_on_Stick_icon",
    "ScavengerOutpost": "Scavenger_Outpost_icon",
    "TradeOutpost": "Trade_Outpost_icon",
    "ScavengerTreasury": "Scavenger_Treasury_icon",
    "ScavTradeInstruction": "Scav_Trade_Instruction_icon",
    "PlayerPushback": "Player_Pushback_icon",
    "MultiplayerItem": "Multiplayer_Item_icon",
    "BrokenShelterWaterLevel": "PreCycle_icon",
    "ReliableIggyDirection": "Reliable_Iggy_Direction_icon",
    "Rainbow": "Rainbow_icon",
    "NoLeviathanStrandingZone": "No_Leviathan_Stranding_Zone_icon",
    "Vine": "Vine_icon",
    "VultureMask": "Vulture_Mask_icon",
    "SnowSource": "Snow_Source_icon",
    "DeathFallFocus": "Death_Fall_Focus_icon",
    "CellDistortion": "Cell_Distortion_icon",
    "LocalBlizzard": "Local_Blizzard_icon",
    "HangingPearls": "Hanging_Pearls_icon",
    "ExitSymbolShelter": "ShortcutShelter",
    "ExitSymbolHidden": "hiddenclose",
    "ExitSymbolAncientShelter": "ShortcutAShelter",
    "BlinkingFlower": "Blinking_Flower_icon",
    "Germinator": "Germinator_icon",
    "OEsphere": "OE_sphere_icon",
    "MoonCloak": "Cloak_icon",
    "KarmaShrine": "Karma_Shrine_icon",
    //## Tokens
    "GoldToken": "Gold_Token_icon",
    "BlueToken": "Blue_Token_icon",
    "GreenToken": "Green_Token_icon",
    "RedToken": "Red_Token_icon",
    "WhiteToken": "Broadcast_pre-pebbles_icon",
    "DevToken": "Dev_Token_icon",
    //##End PlacedObjects
    //## Room Tags
    "SHELTER": "Shelter_icon",
    "ANCIENTSHELTER": "AncientShelter_icon",
    "GATE": "Gate_icon",
    "SWARMROOM": "SwarmRoom_icon",
    "PERF_HEAVY": "Perf_Heavy_icon",
    "SCAVOUTPOST": "ScavOutpost_icon",
    "SCAVTRADER": "ScavTrader_icon",
    "NOTRACKERS": "NoTrackers_icon",
    "ARENA": "Arena_icon",
    //## Broadcasts
    "cc": "Broadcast_cc_icon",
    "dm": "Broadcast_dm_icon",
    "ds": "Broadcast_ds_icon",
    "gw": "Broadcast_gw_icon",
    "hi": "Broadcast_hi_icon",
    "lm": "Broadcast_lm_icon",
    "lp": "Broadcast_post-pebbles_icon",
    "lp": "Broadcast_pre-pebbles_icon",
    "sb": "Broadcast_sb_icon",
    "sh": "Broadcast_sh_icon",
    "si": "Broadcast_si_icon",
    "cc": "Broadcast_cc_icon",
    "dm": "Broadcast_dm_icon",
    "ds": "Broadcast_ds_icon",
    "gw": "Broadcast_gw_icon",
    "hi": "Broadcast_hi_icon",
    "lm": "Broadcast_lm_icon",
    "Chatlog_CC0": "Broadcast_cc_icon",
    "Chatlog_Broadcast7": "Broadcast_pre-pebbles_icon",
    "Chatlog_DS0": "Broadcast_ds_icon",
    "Chatlog_GW0": "Pearl_gw_icon",
    "Chatlog_HI0": "Broadcast_hi_icon",
    "Chatlog_Broadcast5": "Broadcast_pre-pebbles_icon",
    "Chatlog_Broadcast6": "Broadcast_pre-pebbles_icon",
    "Chatlog_Broadcast4": "Broadcast_pre-pebbles_icon",
    "Chatlog_SB0": "Broadcast_sb_icon",
    "Chatlog_Broadcast3": "Broadcast_pre-pebbles_icon",
    "Chatlog_SH0": "Broadcast_sh_icon",
    "Chatlog_SI2": "Broadcast_si_icon",
    "Chatlog_SI5": "Broadcast_si_icon",
    "Chatlog_SI3": "Broadcast_si_icon",
    "Chatlog_SI4": "Broadcast_si_icon",
    "Chatlog_Broadcast1": "Broadcast_pre-pebbles_icon",
    "Chatlog_Broadcast2": "Broadcast_pre-pebbles_icon",
    "Chatlog_Broadcast0": "Broadcast_pre-pebbles_icon",
    "Chatlog_GW2": "Broadcast_gw_icon",
    "Chatlog_GW0": "Broadcast_gw_icon",
    "Chatlog_GW1": "Broadcast_gw_icon",
    "Chatlog_DM1": "Broadcast_dm_icon",
    "Chatlog_DM0": "Broadcast_dm_icon",
    "Chatlog_LM0": "Broadcast_lm_icon",
    "Chatlog_Broadcast1": "Broadcast_pre-pebbles_icon",
    "Chatlog_LM1": "Broadcast_lm_icon",
    "Chatlog_Broadcast9": "Broadcast_pre-pebbles_icon",
    "Chatlog_Broadcast8": "Broadcast_pre-pebbles_icon",
    //## Pearls
    "broadcastmisc": "Pearl_broadcastmisc_icon",
    "cc": "Pearl_cc_icon",
    "cl": "Pearl_cl_icon",
    "dm": "Pearl_dm_icon",
    "ds": "Pearl_ds_icon",
    "gw": "Pearl_gw_icon",
    "hi": "Pearl_hi_icon",
    "lc": "Pearl_lc_icon",
    "lc_second": "Pearl_lc_second_icon",
    "lf_bottom": "Pearl_lf_bottom_icon",
    "lf_west": "Pearl_lf_west_icon",
    "misc": "Pearl_misc_icon",
    "misc2": "Pearl_misc2_icon",
    "ms": "Pearl_ms_icon",
    "oe": "Pearl_oe_icon",
    "pebblespearl_-": "Pearl_pebblespearl_-_icon",
    "pebblespearl_2": "Pearl_pebblespearl_2_icon",
    "pebblespearl_3": "Pearl_pebblespearl_3_icon",
    "red_stomach": "Pearl_red_stomach_icon",
    "rivulet_stomach": "Pearl_rivulet_stomach_icon",
    "rm": "Pearl_rm_icon",
    "sb_filtration": "Pearl_sb_filtration_icon",
    "sb_ravine": "Pearl_sb_ravine_icon",
    "sh": "Pearl_sh_icon",
    "si_chat3": "Pearl_si_chat3_icon",
    "si_chat4": "Pearl_si_chat4_icon",
    "si_chat5": "Pearl_si_chat5_icon",
    "si_top": "Pearl_si_top_icon",
    "si_west": "Pearl_si_west_icon",
    "sl_bridge": "Pearl_sl_bridge_icon",
    "sl_chimney": "Pearl_sl_chimney_icon",
    "sl_moon": "Pearl_sl_moon_icon",
    "spearmasterpearl": "Pearl_spearmasterpearl_icon",
    "su_filt": "Pearl_su_filt_icon",
    "su": "Pearl_su_icon",
    "uw": "Pearl_uw_icon",
    "vs": "Pearl_vs_icon",
}
const hidden_placed_objects = {
    //## MSC
    "MSArteryPush": "MS_Artery_Push_icon",
    //## Vanilla
    "SuperStructureFuses": "Super_Structure_Fuses_icon",
    "WallMycelia": "Wall_Mycelia_icon",
    "LightSource": "Light_Source_icon",
    "LightFixture": "Light_Fixture_icon",
    "SpotLight": "Spot_Light_icon",
    "CorruptionDarkness": "Corruption_Darkness_icon",
    "SSLightRod": "SS_Light_Rod_icon",
    "DeadSeedCob": "Dead_Seed_Cob_icon",
    "CosmeticSlimeMold": "Cosmetic_Slime_Mold_icon",
    "CosmeticSlimeMold2": "Cosmetic_Slime_Mold_2_icon",
    "CustomDecal": "Custom_Decal_icon",
    "InsectGroup": "Insect_Group_icon",
    "DeadTokenStalk": "Dead_Token_Stalk_icon",
    "LightBeam": "Light_Beam_icon",
    "Filter": "Filter_icon",
    "FairyParticleSettings": "Fairy_Particle_Settings_icon",
    "DayNightSettings": "Day_Night_Settings_icon",
    "SteamPipe": "Steam_Pipe_icon",
    "WallSteamer": "Wall_Steamer_icon",
}


var requestLock = {};
var lastRequest = null;

function getJsonObject(url, cb, async = true) {
    if (lastRequest != null) lastRequest.abort();
    let request = new XMLHttpRequest();
    lastRequest = request;
    requestLock = {};
    request.requestLock = requestLock;
    request.open('GET', url, async);
    request.onreadystatechange = function () {
        if (request.requestLock != requestLock && request.status != 0) {
            request.abort();
            console.log("request for " + url + " aborted!");
        }
        else if (request.readyState === 4 && request.status === 200) {
            try {
                cb(JSON.parse(request.responseText));
            } catch (err) {
                console.log(err);
            }
            if (lastRequest == request) lastRequest = null;
        }
    }
    request.send();
}
