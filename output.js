function createForm(){
  var formPage = new views.Form();
  var GroundWaterMonitoringFormLabel = new views.Label();
  var GroundWaterMonitoringFormTextbox = new views.Textbox();

  var SiteIDLabel = new views.Label();
  var SiteIDTextbox = new views.Textbox();

  var JobNameLabel = new views.Label();
  var JobNameTextbox = new views.Textbox();

  var BasinLabel = new views.Label();
  var Basinselect = new views.select();

  var WellfieldLabel = new views.Label();
  var Wellfieldselect = new views.select();

  var RecordedByLabel = new views.Label();
  var RecordedByTextbox = new views.Textbox();

  var DateLabel = new views.Label();
  var DateDate Format (dd/mm/yyyy) = new views.Date Format (dd/mm/yyyy)();

  var TimeLabel = new views.Label();
  var Time24hr Time Format [hhmm] = new views.24hr Time Format [hhmm]();

  var FreeGasReading(Methane)Label = new views.Label();
  var FreeGasReading(Methane)Textbox = new views.Textbox();

  var WellTypeLabel = new views.Label();
  var WellTypeLabel = new views.Label();

  var MonitoringLabel = new views.Label();
  var MonitoringRadioBox = new views.RadioBox();

  var ExtractionLabel = new views.Label();
  var ExtractionRadioBox = new views.RadioBox();

  var OtherLabel = new views.Label();
  var OtherRadioBox = new views.RadioBox();

  var WellMaterialLabel = new views.Label();
  var WellMaterialLabel = new views.Label();

  var PVCLabel = new views.Label();
  var PVCRadioBox = new views.RadioBox();

  var OtherLabel = new views.Label();
  var OtherRadioBox = new views.RadioBox();

  var SteelLabel = new views.Label();
  var SteelRadioBox = new views.RadioBox();

  var WaterLevelDepthLabel = new views.Label();
  var WaterLevelDepthTextbox = new views.Textbox();

  var MeasurementPointDescriptionLabel = new views.Label();
  var MeasurementPointDescriptionTextbox = new views.Textbox();

  var TotalDepthofWellLabel = new views.Label();
  var TotalDepthofWellTextbox = new views.Textbox();

  var WellDiameterLabel = new views.Label();
  var WellDiameterTextbox = new views.Textbox();

  var BailerTypeLabel = new views.Label();
  var BailerTypeLabel = new views.Label();

  var PVCLabel = new views.Label();
  var PVCRadioBox = new views.RadioBox();

  var SteelLabel = new views.Label();
  var SteelRadioBox = new views.RadioBox();

  var TeflonLabel = new views.Label();
  var TeflonRadioBox = new views.RadioBox();

  var OtherLabel = new views.Label();
  var OtherRadioBox = new views.RadioBox();

  var PumpTypeLabel = new views.Label();
  var PumpTypeLabel = new views.Label();

  var SubmersibleLabel = new views.Label();
  var SubmersibleRadioBox = new views.RadioBox();

  var BladderLabel = new views.Label();
  var BladderRadioBox = new views.RadioBox();

  var OtherLabel = new views.Label();
  var OtherRadioBox = new views.RadioBox();

  var NotesLabel = new views.Label();
  var NotesTextArea = new views.TextArea();

  var PumpIntakeSettingLabel = new views.Label();
  var PumpIntakeSettingLabel = new views.Label();

  var DepthLabel = new views.Label();
  var DepthTextbox = new views.Textbox();

  var FieldParameterMeasurementsLabel = new views.Label();
  var FieldParameterMeasurementsLabel = new views.Label();

  var TimeLabel = new views.Label();
  var TimeTextBox = new views.TextBox();

  var VolumePurgedLabel = new views.Label();
  var VolumePurgedTextbox = new views.Textbox();

  var DOLabel = new views.Label();
  var DOTextbox = new views.Textbox();

  var DOppmLabel = new views.Label();
  var DOppmTextbox = new views.Textbox();

  var ElectricalCondutivitiyLabel = new views.Label();
  var ElectricalCondutivitiyTextbox = new views.Textbox();

  var pHLabel = new views.Label();
  var pHTextbox = new views.Textbox();

  var 0RPorRed0xLabel = new views.Label();
  var 0RPorRed0xTextbox = new views.Textbox();

  var MeasurementCommentsLabel = new views.Label();
  var MeasurementCommentsTextArea = new views.TextArea();

  var ElectricalCondutivitiyLabel = new views.Label();
  var ElectricalCondutivitiyTextbox = new views.Textbox();

  var SanitaryLabel = new views.Label();
  var SanitaryRadioBox = new views.RadioBox();

  var DischargewaterdisposalLabel = new views.Label();
  var DischargewaterdisposalLabel = new views.Label();

  var TempLabel = new views.Label();
  var TempTextbox = new views.Textbox();

  var SewerStormLabel = new views.Label();
  var SewerStormRadioBox = new views.RadioBox();

  var OtherCommentLabel = new views.Label();
  var OtherCommentTextArea = new views.TextArea();

  var SampleTaken(Yes/No)Label = new views.Label();
  var SampleTaken(Yes/No)CheckBox = new views.CheckBox();

  var BOTTLENUMBERLabel = new views.Label();
  var BOTTLENUMBERTextbox = new views.Textbox();

  var SamplingMethodLabel = new views.Label();
  var SamplingMethodDropDown = new views.DropDown();

  var SampleTypeLabel = new views.Label();
  var SampleTypeLabel = new views.Label();

  var SAMPLENUMBERLabel = new views.Label();
  var SAMPLENUMBERTextbox = new views.Textbox();

  var DUPE2Label = new views.Label();
  var DUPE2RadioBox = new views.RadioBox();

  var WellSamplingLabel = new views.Label();
  var WellSamplingLabel = new views.Label();

  var TRIPCLICATE1Label = new views.Label();
  var TRIPCLICATE1RadioBox = new views.RadioBox();

  var BOTTLETYPELabel = new views.Label();
  var BOTTLETYPEDropDown = new views.DropDown();

  var TRIPCLICATE2Label = new views.Label();
  var TRIPCLICATE2RadioBox = new views.RadioBox();

  var RINSATE2Label = new views.Label();
  var RINSATE2RadioBox = new views.RadioBox();

  var TRIPCLICATE3Label = new views.Label();
  var TRIPCLICATE3RadioBox = new views.RadioBox();

  var SampleCommentLabel = new views.Label();
  var SampleCommentTextArea = new views.TextArea();

GroundWaterMonitoringForm.text.value = 'Ground Water Monitoring Form ';
GroundWaterMonitoringForm.classes.value = 'inp';

  var DrumsLabel = new views.Label();
  var DrumsRadioBox = new views.RadioBox();

  var TRIPBLANKLabel = new views.Label();
  var TRIPBLANKRadioBox = new views.RadioBox();

  var WellHeadConditionLabel = new views.Label();
  var WellHeadConditionTextbox = new views.Textbox();

JobName.text.value = 'Job Name';
JobName.classes.value = 'inp';

Wellfield.text.value = 'Wellfield';
Wellfield.classes.value = 'inp';

FreeGasReading(Methane).text.value = 'Free Gas Reading (Methane)';
FreeGasReading(Methane).classes.value = 'inp';

Time.text.value = 'Time';
Time.classes.value = 'inp';

WellType.text.value = 'Well Type';
WellType.classes.value = 'head2';

WellMaterial.text.value = 'Well Material';
WellMaterial.classes.value = 'head2';

  var SewerLabel = new views.Label();
  var SewerRadioBox = new views.RadioBox();

Other.text.value = 'Other';
Other.classes.value = 'inp';

  var OtherLabel = new views.Label();
  var OtherRadioBox = new views.RadioBox();

WellHeadCondition.text.value = 'Well Head Condition';
WellHeadCondition.classes.value = 'inp';

WaterLevelDepth.text.value = 'Water Level Depth ';
WaterLevelDepth.classes.value = 'inp';

MeasurementPointDescription.text.value = 'Measurement Point Description';
MeasurementPointDescription.classes.value = 'inp';

  var RINSATE1Label = new views.Label();
  var RINSATE1RadioBox = new views.RadioBox();

TotalDepthofWell.text.value = 'Total Depth of Well ';
TotalDepthofWell.classes.value = 'inp';

  var TRIPSPIKELabel = new views.Label();
  var TRIPSPIKERadioBox = new views.RadioBox();

Teflon.text.value = 'Teflon';
Teflon.classes.value = 'inp';

Bladder.text.value = 'Bladder';
Bladder.classes.value = 'inp';

Submersible.text.value = 'Submersible';
Submersible.classes.value = 'inp';

  var RINSATE3Label = new views.Label();
  var RINSATE3RadioBox = new views.RadioBox();

PumpIntakeSetting.text.value = 'Pump Intake Setting';
PumpIntakeSetting.classes.value = 'head3';

VolumePurged.text.value = 'Volume Purged';
VolumePurged.classes.value = 'inp';

  var TurbidityLabel = new views.Label();
  var TurbidityTextbox = new views.Textbox();

ElectricalCondutivitiy.text.value = 'Electrical Condutivitiy ';
ElectricalCondutivitiy.classes.value = 'inp';

ElectricalCondutivitiy.text.value = 'Electrical Condutivitiy ';
ElectricalCondutivitiy.classes.value = 'inp';

Temp.text.value = 'Temp ';
Temp.classes.value = 'inp';

Extraction.text.value = 'Extraction';
Extraction.classes.value = 'inp';

Other.text.value = 'Other';
Other.classes.value = 'inp';

  var PRIMARYLabel = new views.Label();
  var PRIMARYRadioBox = new views.RadioBox();

Dischargewaterdisposal.text.value = 'Discharge water disposal';
Dischargewaterdisposal.classes.value = 'head3';

FieldParameterMeasurements.text.value = 'Field Parameter Measurements';
FieldParameterMeasurements.classes.value = 'head3';

OtherComment.text.value = 'Other Comment';
OtherComment.classes.value = '';

WellSampling.text.value = 'Well Sampling ';
WellSampling.classes.value = 'head2';

MeasurementComments.text.value = 'Measurement Comments';
MeasurementComments.classes.value = '';

SampleTaken(Yes/No).text.value = 'Sample Taken (Yes/No) ';
SampleTaken(Yes/No).classes.value = 'inp';

Turbidity.text.value = 'Turbidity ';
Turbidity.classes.value = 'inp';

BOTTLETYPE.text.value = 'BOTTLE TYPE';
BOTTLETYPE.classes.value = 'inp';

SamplingMethod.text.value = 'Sampling Method';
SamplingMethod.classes.value = 'inp';

  var PurgeSetupLabel = new views.Label();
  var PurgeSetupLabel = new views.Label();

TRIPCLICATE2.text.value = 'TRIPCLICATE2';
TRIPCLICATE2.classes.value = 'inp';

SAMPLENUMBER.text.value = 'SAMPLE NUMBER';
SAMPLENUMBER.classes.value = 'inp';

RINSATE2.text.value = 'RINSATE2';
RINSATE2.classes.value = 'inp';

PumpType.text.value = 'Pump Type';
PumpType.classes.value = 'head3';

TRIPSPIKE.text.value = 'TRIP SPIKE';
TRIPSPIKE.classes.value = 'inp';

SampleComment.text.value = 'Sample Comment';
SampleComment.classes.value = '';

SiteIDLabel,
SiteIDTextbox,
DUPE1.text.value = 'DUPE1';
DUPE1.classes.value = 'inp';

  formPage.views.content.add([
TRIPCLICATE1.text.value = 'TRIPCLICATE1';
TRIPCLICATE1.classes.value = 'inp';

WellTypeLabel,
WellTypeLabel,
DUPE2.text.value = 'DUPE2';
DUPE2.classes.value = 'inp';

OtherLabel,
OtherRadioBox,
Sanitary.text.value = 'Sanitary';
Sanitary.classes.value = 'inp';

SteelLabel,
SteelRadioBox,
BailerType.text.value = 'Bailer Type';
BailerType.classes.value = 'head3';

WaterLevelDepthLabel,
WaterLevelDepthTextbox,
PVC.text.value = 'PVC';
PVC.classes.value = 'inp';

BailerTypeLabel,
BailerTypeLabel,
  var DUPE1Label = new views.Label();
  var DUPE1RadioBox = new views.RadioBox();

BasinLabel,
Basinselect,
RINSATE3.text.value = 'RINSATE3';
RINSATE3.classes.value = 'inp';

WellfieldLabel,
Wellfieldselect,
WellDiameter.text.value = 'Well Diameter ';
WellDiameter.classes.value = 'inp';

PumpIntakeSettingLabel,
PumpIntakeSettingLabel,
BOTTLENUMBER.text.value = 'BOTTLE NUMBER';
BOTTLENUMBER.classes.value = 'inp';

FieldParameterMeasurementsLabel,
FieldParameterMeasurementsLabel,
Monitoring.text.value = 'Monitoring';
Monitoring.classes.value = 'inp';

pHLabel,
pHTextbox,
MeasurementPointDescriptionLabel,
MeasurementPointDescriptionTextbox,
MeasurementCommentsLabel,
MeasurementCommentsTextArea,
Steel.text.value = 'Steel';
Steel.classes.value = 'inp';

SanitaryLabel,
SanitaryRadioBox,
SampleType.text.value = 'Sample Type';
SampleType.classes.value = 'head3';

TRIPBLANK.text.value = 'TRIP BLANK';
TRIPBLANK.classes.value = 'inp';

  var DUPE3Label = new views.Label();
  var DUPE3RadioBox = new views.RadioBox();

SAMPLENUMBERLabel,
SAMPLENUMBERTextbox,
RINSATE1.text.value = 'RINSATE1';
RINSATE1.classes.value = 'inp';

SampleTaken(Yes/No)Label,
SampleTaken(Yes/No)CheckBox,
Other.text.value = 'Other';
Other.classes.value = 'inp';

Steel.text.value = 'Steel';
Steel.classes.value = 'inp';

TRIPCLICATE3.text.value = 'TRIPCLICATE3';
TRIPCLICATE3.classes.value = 'inp';

Basin.text.value = 'Basin';
Basin.classes.value = 'inp';

PurgeSetup.text.value = 'Purge Setup';
PurgeSetup.classes.value = 'head2';

Other.text.value = 'Other';
Other.classes.value = 'inp';

0RPorRed0x.text.value = '0RP or Red0x ';
0RPorRed0x.classes.value = 'inp';

RINSATE3Label,
RINSATE3RadioBox,
Notes.text.value = 'Notes';
Notes.classes.value = '';

pH.text.value = 'pH';
pH.classes.value = 'inp';

Depth.text.value = 'Depth ';
Depth.classes.value = 'inp';

SewerStormLabel,
SewerStormRadioBox,
WellSamplingLabel,
WellSamplingLabel,
DO.text.value = 'DO ';
DO.classes.value = 'inp';

DOppm.text.value = 'DO ppm';
DOppm.classes.value = 'inp';

MonitoringLabel,
MonitoringRadioBox,
Time.text.value = 'Time';
Time.classes.value = 'inp';

SteelLabel,
SteelRadioBox,
RecordedBy.text.value = 'Recorded By';
RecordedBy.classes.value = 'inp';

PVC.text.value = 'PVC';
PVC.classes.value = 'inp';

Sewer.text.value = 'Sewer';
Sewer.classes.value = 'inp';

SewerStorm.text.value = 'Sewer Storm';
SewerStorm.classes.value = 'inp';

Drums.text.value = 'Drums';
Drums.classes.value = 'inp';

GroundWaterMonitoringFormLabel,
GroundWaterMonitoringFormTextbox,
TotalDepthofWellLabel,
TotalDepthofWellTextbox,
FreeGasReading(Methane)Label,
FreeGasReading(Methane)Textbox,
ExtractionLabel,
ExtractionRadioBox,
WellHeadConditionLabel,
WellHeadConditionTextbox,
WellDiameterLabel,
WellDiameterTextbox,
ElectricalCondutivitiyLabel,
ElectricalCondutivitiyTextbox,
DischargewaterdisposalLabel,
DischargewaterdisposalLabel,
PRIMARY.text.value = 'PRIMARY';
PRIMARY.classes.value = 'inp';

JobNameLabel,
JobNameTextbox,
ElectricalCondutivitiyLabel,
ElectricalCondutivitiyTextbox,
TurbidityLabel,
TurbidityTextbox,
SamplingMethodLabel,
SamplingMethodDropDown,
OtherLabel,
OtherRadioBox,
RecordedByLabel,
RecordedByTextbox,
TimeLabel,
TimeTextBox,
TRIPSPIKELabel,
TRIPSPIKERadioBox,
TRIPCLICATE3Label,
TRIPCLICATE3RadioBox,
Date.text.value = 'Date';
Date.classes.value = 'inp';

DUPE1Label,
DUPE1RadioBox,
0RPorRed0xLabel,
0RPorRed0xTextbox,
WellMaterialLabel,
WellMaterialLabel,
SampleCommentLabel,
SampleCommentTextArea,
TRIPCLICATE1Label,
TRIPCLICATE1RadioBox,
Other.text.value = 'Other';
Other.classes.value = 'inp';

BOTTLETYPELabel,
BOTTLETYPEDropDown,
TRIPCLICATE2Label,
TRIPCLICATE2RadioBox,
PurgeSetupLabel,
PurgeSetupLabel,
DUPE3.text.value = 'DUPE3';
DUPE3.classes.value = 'inp';

VolumePurgedLabel,
VolumePurgedTextbox,
OtherCommentLabel,
OtherCommentTextArea,
DOLabel,
DOTextbox,
BOTTLENUMBERLabel,
BOTTLENUMBERTextbox,
PVCLabel,
PVCRadioBox,
DateLabel,
DateDate Format (dd/mm/yyyy),
OtherLabel,
OtherRadioBox,
PRIMARYLabel,
PRIMARYRadioBox,
PumpTypeLabel,
PumpTypeLabel,
  ]);
  formPage.path = '[/form]';DUPE3Label,
DUPE3RadioBox,
RINSATE2Label,
RINSATE2RadioBox,
RINSATE1Label,
RINSATE1RadioBox,
TimeLabel,
Time24hr Time Format [hhmm],
PVCLabel,
PVCRadioBox,
DUPE2Label,
DUPE2RadioBox,
TeflonLabel,
TeflonRadioBox,
SubmersibleLabel,
SubmersibleRadioBox,
DrumsLabel,
DrumsRadioBox,
BladderLabel,
BladderRadioBox,
SampleTypeLabel,
SampleTypeLabel,
DepthLabel,
DepthTextbox,
OtherLabel,
OtherRadioBox,
OtherLabel,
OtherRadioBox,
NotesLabel,
NotesTextArea,
DOppmLabel,
DOppmTextbox,
SewerLabel,
SewerRadioBox,
TempLabel,
TempTextbox,
TRIPBLANKLabel,
TRIPBLANKRadioBox,
SiteID.text.value = 'Site ID';
SiteID.classes.value = 'inp';

