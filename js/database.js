/**Database scripting, based on html5rocks (http://www.html5rocks.com/en/tutorials/webdatabase/todo/)**/

var listCams = new Array();
listCams['Site0Camera10']="The Quays from Liberty Hall";
listCams['Bawneouge']="Nangor Rd/Bawneouge Jtn";
listCams['BelgardAirton']="Belgard Airton";
listCams['belgardcook']="Belgard Cookstown";
listCams['belgardmayberry']="Belgard Mayberry";
listCams['BelgardSqE']="Belgard Sq East";
listCams['Castleroad']="Castle Road/ORR";
listCams['Deansrath']="Nangor Rd/Deansrath Jtn";
listCams['FonthillRon']="Fonthill/Ronanstown";
listCams['Greenhillsairton']="Greenhills Airton";
listCams['Greenhillsmayberry']="Greenhills Mayberry";
listCams['Greenhillstallaght']="Greenhills Tallaght";
listCams['Greenhillstymon']="Greenhills Tymon";
listCams['Jobstown']="Jobstown";
listCams['killen']="Nangor Road/Killeen";
listCams['liffeyvalley']="Fonthill/Liffey Valley";
listCams['Lucanwood']="Lucan Rd at Woodvale";
listCams['m50redcow']="M50 Red Cow";
listCams['N4newcastle']="N4 Newcastle";
listCams['N7citywest']="N7 City West Junction";
listCams['N7Longmile']="N7 Longmile";
listCams['N81belgard']="N81 Belgard Rd";
listCams['N81Citywest']="N81 Citwest";
listCams['N81Greenhills']="N81 Greenhills";
listCams['N81oldbawn']="N81 Oldbawn";
listCams['N81white']="N81 Whitestown";
listCams['ORRFetter']="ORR Fettercairn";
listCams['ORRFox']="ORR at Foxhunter";
listCams['ORRGrange']="ORR Grange Castle";
listCams['ORRnangor']="ORR Nangor";
listCams['Parkwest']="Nangor Park West Junction";
listCams['Rathcoole']="N7 Rathcoole";
listCams['Tallaghtluas']="Tallaght Luas";
listCams['Yellowmeadows']="Nangor Rd Yellowmeadows Junction";
listCams['Site0Camera10']="The Quays from Liberty Hall";
listCams['Site0Camera100']="N11 Fosters";
listCams['Site0Camera101']="N11 Mont Merrion";
listCams['Site0Camera102']="N11 Kilmacud Rd";
listCams['Site0Camera103']="N11 Trees Road";
listCams['Site0Camera104']="N11 Newtownpark Avenue";
listCams['Site0Camera105']="N11 Kill Lane";
listCams['Site0Camera106']="N11 Clonkeen";
listCams['Site0Camera107']="N11 Johnstown";
listCams['Site0Camera108']="N11 Wyattville";
listCams['Site0Camera109']="M1 Balbriggan";
listCams['Site0Camera110']="M1 Airport";
listCams['Site0Camera111']="M1 Drynam";
listCams['Site0Camera112']="M1 Malahide Estuary";
listCams['Site0Camera113']="M1 Lissenhall";
listCams['Site0Camera122']="North Wall Quay";
listCams['Site0Camera127']="Guild Street-Mayor Street";
listCams['Site0Camera131']="Constitution Hill";
listCams['Site0Camera135']="Dublin Port Tunnel Toll Plaza";
listCams['Site0Camera136']="Samuel Beckett Bridge";
listCams['Site0Camera137']="Sir John Rogersons Quay";
listCams['Site0Camera139']="Guild Street-Seville Place";
listCams['Site0Camera15']="John's Road-SCR";
listCams['Site0Camera163']="John's Road West";
listCams['Site0Camera21']="Dame Street from Civic Offices";
listCams['Site0Camera22']="North Quays from Civic Offices";
listCams['Site0Camera23']="Pearse Street";
listCams['Site0Camera24']="North Strand Road";
listCams['Site0Camera27']="Drumcondra Road";
listCams['Site0Camera31']="Harolds Cross Bridge";
listCams['Site0Camera32']="Cabra Road";
listCams['Site0Camera6']="O'Connell Bridge";
listCams['Site0Camera66']="Longmile Road";
listCams['Site0Camera71']="M50 Blanchardstown Roundabout";
listCams['Site0Camera73']="M50 Ballinteer";
listCams['Site0Camera74']="M50 Edmondstown";
listCams['Site0Camera75']="M50 Firhouse";
listCams['Site0Camera77']="M50 Tallaght";
listCams['Site0Camera78']="M50 Ballymount";
listCams['Site0Camera79']="M50 Red Cow";
listCams['Site0Camera80']="M50 Red Cow Slip";
listCams['Site0Camera81']="M50 Greenhills Park";
listCams['Site0Camera82']="M50 Lucan";
listCams['Site0Camera85']="Naas road Newlands cross";
listCams['Site0Camera87']="M50 South of Finglas Roundabout";
listCams['Site0Camera91']="N32 Malahide Road";
listCams['Site0Camera94']="M1 M50";
listCams['Site0Camera95']="M1 Port Tunnel Works";
listCams['Site0Camera96']="M50 Ballymun";
listCams['0317578d_ff79c3da_cam1']="N22 Macroom";
listCams['0318063f_ff81cd24_cam1']="N25 Middleton";
listCams['0318cbbb_008c3c9c_cam1']="N22 Ballyvourney";
listCams['0319b3ef_ff70fdc2_cam1']="N22 Killarney";
listCams['031a9034_ff8b6a14_cam1']="N25 Dungarvan";
listCams['031bafbf_ff7f7dc8_cam1']="N72 Fermoy";
listCams['031da1cb_0076676a_cam1']="M8 Mitchelstown";
listCams['031dcd32_ff7b9443_cam1']="N20 Charleville";
listCams['031df66e_ff9d70e1_cam1']="N25 Wexford";
listCams['031f0045_ff71b74e_cam1']="N13 Abbeyfeale";
listCams['031f015b_ff8a178a_cam1']="N24 Clonmel";
listCams['032169ad_ff9bde52_cam1']="N11 Enniscorthy";
listCams['032184cd_ff7844d2_cam1']="N21 Rathkeale Bypass";
listCams['032237d7_ff809c3d_cam1']="N24 Pallas Green";
listCams['0322e573_ff916633_cam1']="N10 Kilkenny";
listCams['03237e72_ff7877d2_cam1']="N18 Limerick Tunnel South";
listCams['0323b008_00603651_cam1']="N8 Two Mile Borris";
listCams['0325648e_ffa1c3a7_cam1']="N11 Arklow Bypass";
listCams['0326f2c7_ff79d30b_cam1']="Clonmacken link Rd";
listCams['0328eb55_ff90e0bc_cam1']="M7 Portlaoise Bypass";
listCams['0328fb9c_ff9aad6a_cam1']="N81 Baltinglass";
listCams['032b5e81_0066edd4_cam1']="M7 Newbridge Bypass";
listCams['032b7660_007297f0_cam1']="M6 Glennascaul";
listCams['032b9d70_0077a100_cam1']="M6 West Ballinasloe";
listCams['032bfe02_ffa285e1_cam1']="N11 Bray Bypass";
listCams['032cda47_ff9dd289_cam1']="N81 Tallaght";
listCams['032e6995_ff9ec02a_cam1']="M50 Blanch";
listCams['032ef7ba_00580d52_cam1']="M50 Dublin Airport";
listCams['032faac4_ff6e72b7_cam1']="N59 Connemara";
listCams['03318948_ff78fe5e_cam1']="N17 Tuam";
listCams['03322130_ff9a2a1f_cam1']="M3 Kilcarn";
listCams['03323d67_0071e1a5_cam1']="N4 Ballinalack";
listCams['0333b817_ff9e62da_cam1']="M1 Drogheda Bypass";
listCams['03340866_ff892c14_cam1']="N4 Longford Bypass";
listCams['0335f618_ff936cdc_cam1']="N3 Cavan";
listCams['0336124e_007dde39_cam1']="N61 Elphin";
listCams['0336e5ef_006570f8_cam1']="N2 Reaghstown";
listCams['0338bde6_ff8f5906_cam1']="N3 Butlers Bridge";
listCams['0339afed_ff722711_cam1']="N59 Ballina";
listCams['033a1070_ff7f1030_cam1']="N4 Collooney Bypass";
listCams['033d50b0_006a3f70_cam1']="N2 Emyvale";
listCams['033f1414_ff80de6d_cam1']="N15 Bundoran";
listCams['034425d2_ff8b1572_cam1']="N15 Killygordon";
listCams['0347de83_ff8eefc6_cam1']="N13 Grianan of Aileach";
listCams['0347e95c_ff832632_cam1']="N56 Gweedore";

// function initCamera() {
// 	$("li").remove(":contains('Delete')"); 
// 	getFilecamName();
// }

// Call by body onload
function initIndex() {
    getImages();
}

function addFilenames(name) {
	localStorage.clear();
	localStorage.camera = name;
	// getFilecamName();
}

function removeFilecamName(camName){
	var listcam = "";
	var count = 0;
	$("#"+camName).remove(); 
	$("#sortable li").each(function(){
		listcam += $(this).attr("id")+" ";
		++count;
	});
	listcam = $.trim(listcam,1)
	localStorage.camera = listcam;
	getFilecamName();
	localStorage.removeItem(camName);
	$("li").remove(); 
	getFilecamName();
}

function ClearAll(){
	$("li").remove(); 
	localStorage.clear();
	getFilecamName();
}

function getFilecamName(){
	var rowOutput = "";
	var listcam = "";
	listcam = localStorage.getItem("camera");
	Loc = getcamName(listcam);
	rowOutput += Loc;
	$("#dropzone").text(rowOutput); 
} 

function getImages(){
	var rowOutput = "";
	var rowAnim = "";
	var url = 'src="http://www.traffic-cameras.info/serve.php?cam=';
	listcam = localStorage.getItem("camera");
	if (listcam == null){
		listcam = "Site0Camera10";
	}
	Loc = getcamName(listcam);
	rowOutput += '<img alt="'+ Loc + '" id="' + listcam + '_2" class="cam2" ' + url + listcam + '&nb=2">';
	rowOutput += '<img alt="'+ Loc + '" id="' + listcam + '_1" class="cam1" ' + url + listcam + '&nb=1">';
	rowOutput += '<img alt="'+ Loc + '!" id="' + listcam + '_0" class="cam0" ' + url + listcam + '&nb=0">';
	rowOutput += '<img alt="'+ Loc + '!" id="' + listcam + '_5" class="cam5" ' + url + listcam + '&nb=5">';
	rowOutput += '<img alt="'+ Loc + '!" id="' + listcam + '_4" class="cam4" ' + url + listcam + '&nb=4">';
	rowOutput += '<img alt="'+ Loc + '!" id="' + listcam + '_3" class="cam3" ' + url + listcam + '&nb=3"><br>';

	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=5" style="position: absolute; display: none; z-index: 0;" class="first">';
	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=4" style="position: absolute; display: none; z-index: 0;">';
	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=3" style="position: absolute; display: none; z-index: 0;">';
	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=2" style="position: absolute; display: none; z-index: 0;">';
	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=1" style="position: absolute; display: none; z-index: 0;">';
	//rowAnim += '<img id="photo" ' + url + listcam +'&nb=0" style="position: absolute; display: none; z-index: 0;">';
	$("#allimages").append(rowOutput);
	$("#Cam_name").append(Loc);
	//$("#slideImages").append(rowAnim);
	//cssbackground = 'url("http://www.traffic-cameras.info/serve.php?cam=' + listcam + '&nb=0") 0 10px no-repeat';
	//$("#slideImages").css('background',cssbackground);
}

function getcamName(filecamName) {
	var Location = listCams[filecamName];
	return Location;
}