import * as classes from "./classes";
import * as enums from "./enums";
import * as functions from "./functions";
import * as generic from "./generic";
import * as interfaces from "./interfaces";

interfaces.testInterfaces();
classes.testClassDefaultParameter();
classes.testAbstractClass();
classes.testConstructorFunctions();
functions.testRestParameter();
functions.testThisParameters();
functions.testThisParametersInCallbacks();
functions.testFunctionOverloads();
generic.testGenericConstraints();
generic.testUsingTypeParameterGenericConstraints();
generic.testUsingClassTypesInGenerics();
enums.testReverseMappings();
enums.testConstEnums();
enums.testAmbientEnums();