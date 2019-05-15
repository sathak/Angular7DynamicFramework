import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TreesService {
    constructor() {
    }
    FILE_DATA = [
        {
            name: 'Folder1',
            isSelect: false,
            children: [
                {
                    name: 'Item1',
                    isSelect: false,
                    children: [
                        {
                            name: 'Child1',
                        },
                        {
                            name: 'Child2',
                        }
                    ]
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder2',
            isSelect: false,
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder3',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder4',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder5',
            children: [
                {
                    name: 'Item1',
                },
                {
                    name: 'Item2',
                }
            ]
        }, {
            name: 'Folder6',
            isSelect: false,
            children: []
        },
        {
            name: 'Folder7',
            isSelect: false,
            children: [
                {
                    name: 'Item1',
                    isSelect: false,
                    children: [
                        {
                            name: 'Child1',
                        },
                        {
                            name: 'Child2',
                        }
                    ]
                },
                {
                    name: 'Item2',
                }
            ]
        },
        {
            name: 'Folder8',
            isSelect: false,
            children: [
                {
                    name: 'Item1',
                    isSelect: false,
                    children: [
                        {
                            name: 'Child1',
                        },
                        {
                            name: 'Child2',
                        }
                    ]
                },
                {
                    name: 'Item2',
                }
            ]
        }
    ];
}
