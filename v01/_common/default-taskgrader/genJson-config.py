#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Copyright (c) 2015 France-IOI, MIT license
#
# http://opensource.org/licenses/MIT

import os.path

### genJson.py configuration
# Base directory for tasks files, should contain the _common folder
# This directory will be used as rootPath
# All paths generated will be relative to this rootPath
CFG_ROOTDIR = '/home/franceioi/tasks/v01/'
# Path to the taskgrader for auto-evaluation
# Path to the taskgrader
CFG_TASKGRADERDIR = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../'))
CFG_TASKGRADER = os.path.join(CFG_TASKGRADERDIR, 'taskgrader.py')

# Paths to ignore while searching for dependencies for the generator
CFG_IGNORE_PATHS = ['.git', '.svn']
# Timeout for test execution of components
CFG_EXEC_TIMEOUT = 60

# Languages to generate defaultParams for
CFG_LANGUAGES = ['c', 'cpp', 'java', 'javascool', 'ocaml', 'pascal', 'python',
    'sh', 'shell']
# Old FranceIOI language to new language mapping
CFG_LANGUAGES_OLD_NEW = {
    'c': 'c',
    'cpp': 'cpp',
    'java': 'java',
    'jvs': 'javascool',
    'ocaml': 'ocaml',
    'ml': 'ocaml',
    'pascal': 'pascal',
    'pas': 'pascal',
    'py': 'python',
    'python': 'python',
    'sh': 'shell',
    'shell': 'shell',
    'javascool': 'javascool'
    }
# File extension -> language autodetection
CFG_LANGEXTS = {
    '.c': 'c',
    '.cpp': 'cpp',
    '.py': 'python',
    '.py2': 'python2',
    '.py3': 'python3',
    '.ml': 'ocaml',
    '.java': 'java',
    '.jvs': 'javascool',
    '.pas': 'pascal',
    '.sh': 'shell',
    '': 'sh'
    }

# Extra generator dependencies to look for (list of globs)
CFG_GEN_EXTRADEPS = ['tests/gen/Makefile', 'tests/files/lib/*/*', 'tests/files/run/*']

# Correct solutions test compilation and execution parameters
CFG_TESTSOLPARAMS = {
    'timeLimitMs': 5000,
    'memoryLimitKb': 64000,
    'useCache': True,
    'stdoutTruncateKb': 10, # On tronque par défaut à 10 Ko
    'stderrTruncateKb': 10, # On tronque par défaut à 10 Ko
    'getFiles': []}


### Default data
# Default task settings: default generator, checker, sanitizer, ...
CFG_DEF_TASKSETTINGS = {
    'generator': 'tests/gen/gen.sh',
    'generatorDeps': [{'name': 'generators.py',
                       'path': '$ROOT_PATH/_common/generators/generators.py'},
                      {'name': 'libRobot.py',
                       'path': '$ROOT_PATH/_common/generators/libRobot.py'}],
    'extraDir': 'tests/files/',
    'ignoreTests': ['sample*'],
    'sanitizer': 'tests/gen/sanitizer.cpp',
    'sanitizerDeps': [{'name': 'sanitizer.h',
                       'path': '$ROOT_PATH/_common/sanitizer/sanitizer.h'},
                      {'name': 'BuffChecker.h',
                       'path': '$ROOT_PATH/_common/sanitizer/BuffChecker.h'},
                      {'name': 'SaniDate.h',
                       'path': '$ROOT_PATH/_common/sanitizer/SaniDate.h'}],
    'checker': 'tests/gen/check.cpp',
    'checkerDeps': [{'name': 'common.h',
                     'path': '$ROOT_PATH/_common/checkers/common.h'},
                    {'name': 'checker_commands.h',
                     'path': '$ROOT_PATH/_common/checkers/checker_commands.h'},
                    {'name': 'checker_robot.h',
                     'path': '$ROOT_PATH/_common/checkers/checker_robot.h'}],
    'defaultDependencies-java': [{'name': 'algorea/Scanner.java',
                                  'path': '$ROOT_PATH/_common/lib/java/algorea/Scanner.java'}]
    }


# Tool default compilation parameters
CFG_DEF_TOOLCOMPPARAMS = {
    'timeLimitMs': 60000,
    'memoryLimitKb': 128*1024,
    'useCache': True,
    'stdoutTruncateKb': -1,
    'stderrTruncateKb': -1,
    'getFiles': []
    }

# Tool default execution parameters
CFG_DEF_TOOLEXECPARAMS = '@defaultToolCompParams'


### We raise an exception if we don't have all configuration variables
for var in ['CFG_ROOTDIR', 'CFG_TASKGRADER', 'CFG_EXEC_TIMEOUT',
        'CFG_LANGUAGES', 'CFG_LANGUAGES_OLD_NEW', 'CFG_DEF_TASKSETTINGS',
        'CFG_TESTSOLPARAMS', 'CFG_DEF_TOOLCOMPPARAMS',
        'CFG_DEF_TOOLEXECPARAMS']:
    if var not in globals():
        raise Exception("Configuration variable %s missing. Please edit config.py." % var)
