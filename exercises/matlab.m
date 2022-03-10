%% Example Extension BoilerPlate Code
% Matlab extension
function output = myFun(input)
    %myFun - Description
    %
    % Syntax: output = myFun(input)
    %
    % Long description
    if (input)
        output = input(3, 2);
    end

end

% Carol Sanders
%% ENGR 215 Lab5
function [Vout] = convertVolume(Vin, Uin, Uout)
    % Write a function [Vout] = convertVolume(Vin, Uin, Uout)that converts
    % a volume Vin (a 1x N double) in the units Uin (a 1 x n string)
    % to a volume Vout (a 1 x N double) in the units Uout (a 1 x m string).
    % The function should be able to convert between any of the following
    % units:
    %   volume  = [Vin, Uin, Uout];

    switch (Uin)
        case 'L'
            convertRatio = 2.113;

            if (strmcmp(Uout == "Pint"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == "Barrel"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == 'Gallon'))
                Vout = Vin * convertRatio;
            end

        case 'Gal'
            %unitOfMeasure = 'Gallon';
            convertRatio = 3.785411784;

            if (strmcmp(Uout == "L"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp (Uout == "Pint"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == "Barrel"))
                Vout = Vin * convertRatio;
            end

        case 'Pint'
            %unitOfMeasure = 'Pint';
            convertRatio = 0.473176473;

            if (strmcmp(Uout == "Gallon"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == "Barrel"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == 'L'))
                Vout = Vin * convertRatio;
            end

        case 'Barrel'
            %unitOfMeasure = 'Barrel';
            convertRatio = 158.987294928;

            if (strmcmp(Uout == 'L'))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == "Gal"))
                Vout = Vin * convertRatio;
            end

            if (strmcmp(Uout == "Pint"))
                Vout = Vin * convertRatio;
            end

        otherwise
            Vout = strmcmp('Invalid meassurement');

    end

%% While Loop
% Example from book
userYear = input('Enter a past year (neg. for B.C.): ');
consYear = 2020; % Year being considered
numAnc = 2;      % Approx. ancestors in considered year
yearsPerGen=20;  % Approx. years per generation

while (consYear >= userYear)
   fprintf('Ancestors in %d: %d\n',consYear,numAnc);
   numAnc = 2 * numAnc; % Each ancestor had two parents
   consYear = consYear - yearsPerGen; % Go back 1 generation
end

%% Figure 12.1.3: Calculating Fibonacci sequence using a while loop.
% Code to follow
curFib = 1; prevFib = 0; nextFib = 1; % initialize variables

fprintf('Fibonacci sequence: 0 1 ');

while (nextFib < 10)
   prevFib = curFib; % F(n-1) = F(n)
   curFib = nextFib; % F(n) = F(n+1)
   fprintf('%d ', curFib); % output current Fibonacci number
   nextFib = curFib + prevFib; % F(n+1) = F(n) + F(n-1)
end
fprintf('\n');

%% While loop compute GCD
numA = input('Enter first positive integer: ');
numB = input('Enter second positive integer: ');
numA = int32(numA);  % forces input to integer in case reals are entered. 
numB = int32(numB);  % forces input to integer in case reals are entered. 

while (numA ~= numB) % Euclid's algorithm
   if (numB > numA) 
      numB = numB - numA;      
   else 
      numA = numA - numB;
   end
end

fprintf('GCD is: %d\n', numA);
