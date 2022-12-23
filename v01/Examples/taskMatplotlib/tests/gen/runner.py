#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-

import sys, traceback, warnings
from StringIO import StringIO

SAVED_FIG = None

def changeImports(scriptPath):
    """Remove matplotlib imports from a script."""
    newScriptLines = []
    for l in open(scriptPath, 'r'):
        # Remove matplotlib from imports
        if l[:6] == 'import':
            imported = map(lambda x: x.strip(), l[7:].strip().split(','))
            if 'matplotlib' in imported:
                imported.remove('matplotlib')
            if len(imported) > 0:
                newScriptLines.append("import %s\n" % ', '.join(imported))
        else:
            newScriptLines.append(l)

    open(scriptPath, 'w').writelines(newScriptLines)


def returnFig(fig):
    """Save the result figure."""
    # We allow only for one figure to be returned.
    # Customize this function to allow for more figures.
    global SAVED_FIG
    if SAVED_FIG is not None:
        raise Exception("A figure was already returned.")

    # Export figure
    imgStr = StringIO()
    fig.savefig(imgStr, format='png', dpi=(75))

    # Save data for output at the end of the script
    SAVED_FIG = imgStr.getvalue().encode('base64')


# Override getpass' getuser
# (matplotlib uses it, and getuser doesn't work inside isolate)
import getpass
def fakeuser(**kwargs):
    return "fakeuser"
getpass.getuser = fakeuser

# Remove matplotlib warnings
warnings.filterwarnings('ignore')

import matplotlib
# Set up matplotlib to not display graphics
matplotlib.use('Agg')
# No user data
matplotlib.rcParams['datapath'] = '.'

# Execute the solution
changeImports("solution.py")
try:
    execfile("solution.py")
except:
    # Remove the runner from the traceback
    excInfo = sys.exc_info()
    traceback.print_exception(excInfo[0], excInfo[1], excInfo[2].tb_next)
    sys.exit(1)

# Check a figure was saved
if SAVED_FIG is None:
    print "no figure returned"
else:
    print SAVED_FIG
