const { measureTime } = require('./lib')
const SEM = require('./JennifersSEM');
const SumofConsecutiveNaturalNumbers = require('./SumofConsecutiveNaturalNumbers');
const SelfReplicatingString = require('./SelfReplicatingString');
const NumberOfGroupsInVillage = require('./NumberOfGroupsInVillage');
const ProgramVerification = require('./ProgramVerification');
const JohnsShelf = require('./JohnsShelf');
const FortuneTeller = require('./FortuneTeller');
// const ppDiff = require('./ppDiff/ppDiff');
const { bubbleSort, selectionSort, insertionSort, mergeSort } = require('./sorting');

const start = new Date();
// SEM('3 6 9');
// SumofConsecutiveNaturalNumbers(100000);
// SelfReplicatingString(10000);
// NumberOfGroupsInVillage('6 5\n1 2\n2 5\n5 1\n3 4\n4 6\n6 8');
// FortuneTeller();
// ProgramVerification();
// JohnsShelf();
// bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
// insertionSort([1000, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]);
mergeSort([1,2,3,4,5,6,8, 20,10]);
const timeElapsed = measureTime();
timeElapsed(new Date() - start);
